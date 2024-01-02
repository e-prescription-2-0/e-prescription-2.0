import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { isEmpty } from "ramda";
import { useState } from "react";
import NothingFound from "./NothingFound";
import ListSearchResult from "./ListSearchResult";
import { searchSlice } from "../../reducers/search";
import SearchPagination from "./SearchPagination";

const SearchContent = ({ setSearchParams, searchParams }) => {
  const listCardData = useReduxState((state) => state.search.list);

  const searchType = useReduxState((state) => state.search.searchType);

  const placeholderText = (searchType === 'patients' && 'Search from yours patient by id...') || (searchType === 'doctors' && 'Search doctor by email...')
  const titleText = (searchType === 'patients' && 'Търси Пациенти') || (searchType === 'doctors' && 'Търси Доктори')

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const setLoading = useReduxAction(searchSlice.actions.setLoading);

  const onChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const onClickSearchButton = () => {
    setSearchParams({ search: searchQuery, page: "1" });

    setLoading(true);
  };

  return (
    <Container className={style["main-search-doctors-container"]}>
      <h1 className="text-center">{titleText}</h1>
      <InputGroup className="mb-3">
        <FormControl
          id="filterInput"
          placeholder={placeholderText}
          aria-label="Search text"
          aria-describedby="basic-addon2"
          value={searchQuery}
          onChange={onChangeSearch}
        />
        <Button onClick={onClickSearchButton}>Search</Button>
      </InputGroup>
      {!isEmpty(listCardData) ? <ListSearchResult /> : <NothingFound />}

      <SearchPagination
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </Container>
  );
};

export default SearchContent;
