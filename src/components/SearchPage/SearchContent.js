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

const SearchContent = ({ searchType }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const fetchDoctors = useReduxAction(searchSlice.actions.fetchDoctors);
  const fetchPatients = useReduxAction(searchSlice.actions.fetchPatients);

  const collectionPatients = useReduxState(
    (state) => state.search.collectionPatients
  );
  const collectionDoctors = useReduxState(
    (state) => state.search.collectionDoctors
  );

  let collection, fetchCollection, titlePage;

  switch (searchType) {
    case "doctors":
      collection = collectionDoctors;
      fetchCollection = fetchDoctors;
      titlePage = "Търси Доктори";
      break;
    case "patients":
      collection = collectionPatients;
      fetchCollection = fetchPatients;
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
