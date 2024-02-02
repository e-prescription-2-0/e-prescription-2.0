import { isEmpty } from "ramda"
import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import PatientTable from "../CreatePrescription/PatientsTable/PatientsTable"
import LoadingPill from "../Loadings/LoadingPill/LoadingPill"
import style from "./SearchPage.module.css"

import { useSelector } from "react-redux"
import SpinnerP from "../SpinnerP/SpinnerP"

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

  const hasMore = currentPage < collection?.[search]?.numberPages || 0
  const { _id: doctorId } = useSelector((state) => state.auth.authUser)

  const loader = (
    <div className={style["search-collection-loader"]}>
      <SpinnerP />
    </div>
  )
  const initialLoad = isEmpty(collectionByPages)

  const fetchMoreData = async () => {
    const nextPage = currentPage + 1
    const pageParams = { search, page: nextPage, initialLoad, doctorId }
    await fetchCollection(pageParams)
  }
  useEffect(() => {
    if (initialLoad) {
      fetchMoreData()
    }
  }, [fetchMoreData, initialLoad])

  return (
    <>
      {initialLoad ? (
        <LoadingPill />
      ) : (
        <InfiniteScroll
          dataLength={dataLength}
          next={fetchMoreData}
          hasMore={initialLoad ? false : hasMore}
          loader={loader}
          as="ul"
          className={style["search-collection-list"]}
        >
          <PatientTable
            hidePatientList={hidePatientList}
            patientsList={collectionData}
            searchType={searchType}
            isPrescriptionCreateMode={isPrescriptionCreateMode}
            isMyPatientsChecked={isMyPatientsChecked}
          />
        </InfiniteScroll>
      )}
    </>
  )
}

export default ListSearchResult
