import { Container, Form } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { isEmpty } from "ramda";
import NothingFound from "./NothingFound";
import ListSearchResult from "./ListSearchResult";
// import SearchPagination from "./SearchPagination";
import BaseSearchFields from "./Fields/BaseSearchField";
import { useSearchParams } from "react-router-dom";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { searchSlice } from "../../reducers/search";
import { useState } from "react";

const SearchContent = ({ searchType }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  // Redux for all doctors
  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors);
  const collectionDoctors = useReduxState(
    (state) => state.search.collectionDoctors
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

  console.log(isMyPatientsChecked);
  let collection, fetchCollection, titlePage;

  switch (searchType) {
    case "doctors":
      collection = collectionDoctors;
      fetchCollection = fetchDoctors;
      titlePage = "Търси Доктори";
      break;
    case "patients":
      if (isMyPatientsChecked) {
        collection = collectionMyPatients;
        fetchCollection = fetchMyPatients;
      } else {
        collection = collectionAllPatients;
        fetchCollection = fetchAllPatients;
      }
      titlePage = "Търси Пациенти";

      break;
  }
  return (
    <Container className={style["main-search-doctors-container"]}>
      <h1 className="text-center">{titlePage}</h1>

      <BaseSearchFields
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        searchType={searchType}
        collection={collection}
        isMyPatientsChecked={isMyPatientsChecked}
        setIsMyPatientsChecked={setIsMyPatientsChecked}
      />

      <ListSearchResult
        collection={collection}
        fetchCollection={fetchCollection}
        searchParams={searchParams}
      />
    </Container>
  );
};

export default SearchContent;
