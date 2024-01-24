import { Container } from "react-bootstrap";
import style from "./SearchPage.module.css";
import ListSearchResult from "./ListSearchResult";
import BaseSearchFields from "./Fields/BaseSearchField";
import { useSearchParams } from "react-router-dom";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { searchSlice } from "../../reducers/search";
import { useState } from "react";
import { useSelector } from "react-redux";



const SearchContent = ({ searchType, hidePatientList,isPrescriptionCreateMode }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  // Redux for all doctors
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors);
  const collectionDoctors = useReduxState(
    (state) => state.search.collectionDoctors
  );
  // Redux for prescriptions
  const fetchAllPrescriptions = useReduxAction(
    searchSlice.actions.fetchAllPrescriptions
  );
  const collectionAllPrescriptions = useReduxState(
    (state) => state.search.collectionAllPrescriptions
  );

  // Redux for all patients
  const fetchAllPatients = useReduxAction(searchSlice.actions.fetchAllPatients);
  const collectionAllPatients = useReduxState(
    (state) => state.search.collectionAllPatients
  );

  // Redux for User Patients
  const fetchMyPatients = useReduxAction(searchSlice.actions.fetchMyPatients);
  const collectionMyPatients = useReduxState(
    (state) => state.search.collectionMyPatients
  );

  const [isMyPatientsChecked, setIsMyPatientsChecked] = useState(false);

  
  let collection, fetchCollection, titlePage, placeholderText;

  switch (searchType) {
    case "doctors":
      collection = collectionDoctors;
      fetchCollection = fetchDoctors;
      placeholderText = "Търси по имейла на доктора";
      titlePage = "Търси Доктори";
      break;
    case "prescriptions":
      collection = collectionAllPrescriptions;
      fetchCollection = fetchAllPrescriptions;

      placeholderText = "Търси по номера на рецептата";
      titlePage = "Търси Рецепта";
      break;
    case "patients":
      if (isMyPatientsChecked) {
        collection = collectionMyPatients;
        fetchCollection = fetchMyPatients;
      } else {
        collection = collectionAllPatients;
        fetchCollection = fetchAllPatients;
      }
      placeholderText = "Търси по ЕГН на пациента";
      titlePage = "Търси Пациенти";

      break;
  }
  return (
    <Container className={style["main-search-doctors-container"]}>
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

     

      />
    </Container>
  );
};

export default SearchContent;
