import { Container } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { useReduxState } from "../../hooks/useReduxState";
import { isEmpty } from "ramda";
import NothingFound from "./NothingFound";
import ListSearchResult from "./ListSearchResult";
import SearchPagination from "./SearchPagination";
import BaseSearchFields from "./Fields/BaseSearchField";
import SearchPatientFromServerField from "./Fields/SearchPatientFromServerField";

const SearchContent = ({ setSearchParams, searchParams }) => {
  const listCardData = useReduxState((state) => state.search.list);

  const searchType = useReduxState((state) => state.search.searchType);
  
  const titleText =
    (searchType === "patients" && "Търси Пациенти") ||
    (searchType === "doctors" && "Търси Доктори");

  return (
    <Container className={style["main-search-doctors-container"]}>
      <h1 className="text-center">{titleText}</h1>
      {searchType === "patients" && <SearchPatientFromServerField />}
      <BaseSearchFields
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />

      {!isEmpty(listCardData) ? <ListSearchResult /> : <NothingFound />}

      <SearchPagination
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </Container>
  );
};

export default SearchContent;
