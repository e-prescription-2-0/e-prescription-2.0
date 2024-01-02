import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { searchSlice } from "../../../reducers/search";
import { useState } from "react";
import { useReduxState } from "../../../hooks/useReduxState";
import style from '../SearchPage.module.css'

const BaseSearchFields = ({ setSearchParams, searchParams }) => {
  const setLoading = useReduxAction(searchSlice.actions.setLoading);
  const searchType = useReduxState((state) => state.search.searchType);

  const placeholderText =
    (searchType === "patients" && "Search from yours patient by id...") ||
    (searchType === "doctors" && "Search doctor by email...");

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const onChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const onClickSearchButton = () => {
    setSearchParams({ search: searchQuery, page: "1" });

    setLoading(true);
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        id="filterInput"
        placeholder={placeholderText}
        aria-label="Search text"
        aria-describedby="basic-addon2"
        value={searchQuery}
        onChange={onChangeSearch}
        className={style["main-search-input-from-user-patients"]}
      />
      <Button onClick={onClickSearchButton}>Search</Button>
    </InputGroup>
  );
};

export default BaseSearchFields;
