import { isEmpty } from "ramda"
import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector } from "react-redux"
import PatientTable from "../CreatePrescription/PatientsTable/PatientTable"
import LoadingPill from "../Loadings/LoadingPill/LoadingPill"
import style from "./SearchPage.module.css"
const ListSearchResult = ({
  collection,
  fetchCollection,
  searchParams,
  hidePatientList,
  searchType,
  isPrescriptionCreateMode,
  isMyPatientsChecked,
}) => {
  const search = searchParams.get("search") || ""

  const collectionByPages = collection?.[search]?.collection || {}
  const collectionData = [].concat(...Object.values(collectionByPages))

  const dataLength = collectionData.length
  const currentPage = Object.keys(collectionByPages).length

  const hasMore = currentPage < collection?.[search]?.numberPages
  const { _id: doctorId } = useSelector((state) => state.auth.authUser)
  const initialLoad = isEmpty(collectionByPages)

  const fetchMoreData = async () => {
    const nextPage = currentPage + 1
    const pageParams = { search, page: nextPage, initialLoad, doctorId }
    await fetchCollection(pageParams)
  }

  useEffect(() => {
    if (initialLoad || hasMore) {
      fetchMoreData()
    }
  }, [fetchMoreData, initialLoad, hasMore])

  return initialLoad ? (
    <LoadingPill />
  ) : (
    <InfiniteScroll
      dataLength={collectionData.length}
      next={fetchMoreData}
      hasMore={hasMore}
      // loader={<LoadingPill />}
      as="ul"
      className={style["search-collection-list"]}
      height={580}
    >
      <PatientTable
        hidePatientList={hidePatientList}
        patientsList={collectionData}
        searchType={searchType}
        isPrescriptionCreateMode={isPrescriptionCreateMode}
        isMyPatientsChecked={isMyPatientsChecked}
      />
    </InfiniteScroll>
  )
}

export default ListSearchResult
