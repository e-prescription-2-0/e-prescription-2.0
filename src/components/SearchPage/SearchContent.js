import { Container } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { isEmpty } from "ramda";
import NothingFound from "./NothingFound";
import ListSearchResult from "./ListSearchResult";
// import SearchPagination from "./SearchPagination";
import BaseSearchFields from "./Fields/BaseSearchField";

const SearchContent = ({
  setSearchParams,
  searchParams,
  collection,
  searchType,
  fetchCollection,
}) => {
  const titleText =
    (searchType === "patients" && "Търси Пациенти") ||
    (searchType === "doctors" && "Търси Доктори");


  return (
    <Container className={style["main-search-doctors-container"]}>
      <h1 className="text-center">{titleText}</h1>

      <BaseSearchFields
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        searchType={searchType}
        collection={collection}
      />

      {/* {!isEmpty(collection) ? ( */}
      <>
        <ListSearchResult
          collection={collection}
          fetchCollection={fetchCollection}
          searchParams={searchParams}
        />
        {/* <SearchPagination
            setSearchParams={setSearchParams}
            searchParams={searchParams}
            searchType={searchType}
          /> */}
      </>
      {/* ) : (
        <NothingFound />
      )} */}
    </Container>
  );
};

export default SearchContent;
