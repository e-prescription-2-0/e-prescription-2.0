import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useReduxAction } from "../../hooks/useReduxAction"
import { useReduxState } from "../../hooks/useReduxState"
import { searchSlice } from "../../reducers/search"
import BaseSearchFields from "./Fields/BaseSearchField"
import ListSearchResult from "./ListSearchResult"
import style from "./SearchPage.module.css"

const SearchContent = ({
  searchType,
  hidePatientList,
  isPrescriptionCreateMode,
}) => {
  const [searchParams, setSearchParams] = useSearchParams({})

  // Redux for all doctors
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors)
  const collectionDoctors = useReduxState(
    (state) => state.search.collectionDoctors
  )
  // Redux for prescriptions
  const fetchAllPrescriptions = useReduxAction(
    searchSlice.actions.fetchAllPrescriptions
  )
  const collectionAllPrescriptions = useReduxState(
    (state) => state.search.collectionAllPrescriptions
  )

  // Redux for all patients
  const fetchAllPatients = useReduxAction(searchSlice.actions.fetchAllPatients)
  const collectionAllPatients = useReduxState(
    (state) => state.search.collectionAllPatients
  )

  // Redux for User Patients
  const fetchMyPatients = useReduxAction(searchSlice.actions.fetchMyPatients)
  const collectionMyPatients = useReduxState(
    (state) => state.search.collectionMyPatients
  )

  const [isMyPatientsChecked, setIsMyPatientsChecked] = useState(false)

  let collection, fetchCollection, titlePage, placeholderText

  switch (searchType) {
    case "doctors":
      collection = collectionDoctors
      fetchCollection = fetchDoctors
      placeholderText = "Търси по имейл на лекар"
      titlePage = "Търси Доктори"
      break
    case "prescriptions":
      collection = collectionAllPrescriptions
      fetchCollection = fetchAllPrescriptions

      placeholderText = "Търси по номер на рецепта"
      titlePage = "Търси Рецепта"
      break
    case "patients":
      if (isMyPatientsChecked) {
        collection = collectionMyPatients
        fetchCollection = fetchMyPatients
      } else {
        collection = collectionAllPatients
        fetchCollection = fetchAllPatients
      }
      placeholderText = "Търси по ЕГН на пациент"
      titlePage = "Търси Пациенти"

      break
  }
  return (
    <div className={style["main-search-doctors-container"]}>
      <h1 className="text-center">{titlePage}</h1>

      <BaseSearchFields
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        placeholderText={placeholderText}
        collection={collection}
        isMyPatientsChecked={isMyPatientsChecked}
        setIsMyPatientsChecked={setIsMyPatientsChecked}
        searchType={searchType}
      />

      <ListSearchResult
        collection={collection}
        fetchCollection={fetchCollection}
        searchParams={searchParams}
        hidePatientList={hidePatientList}
        searchType={searchType}
        isPrescriptionCreateMode={isPrescriptionCreateMode}
        isMyPatientsChecked={isMyPatientsChecked}
      />
    </div>
  )
}

export default SearchContent
