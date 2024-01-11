import { Button, Form, InputGroup } from "react-bootstrap";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { searchSlice } from "../../../reducers/search";
import style from "../SearchPage.module.css";
import { useReduxState } from "../../../hooks/useReduxState";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BaseSearchFields = ({ setSearchParams, searchParams, searchType }) => {
  const placeholderText =
    (searchType === "patients" && "Search by patient ID") ||
    (searchType === "doctors" && "Search doctor by email...");

  // const [searchQuery, setSearchQuery] = useState(
  //   searchParams.get("search") || ""
  // );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSearchParams({ search: searchQuery });
  // };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    value ? setSearchParams({ search: value }) : setSearchParams({});
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          name="search"
          id="searchInput"
          placeholder={placeholderText}
          aria-label="Search text"
          aria-describedby="basic-addon2"
          className={style["main-search-input-from-user-patients"]}
          // defaultValue={searchParams.get("search") || ""}
          onChange={onChangeSearch}
          value={searchParams.get("search") || ""}
        />
        {/* <Button type="submit">Search</Button> */}

        <button
          // type="submit"
          className={style["delete-search-query-button"]}
          onClick={() => setSearchParams({})}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </InputGroup>
    </>
  );
};

export default BaseSearchFields;
