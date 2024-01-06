import { Button, Form, InputGroup } from "react-bootstrap";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { searchSlice } from "../../../reducers/search";
import style from "../SearchPage.module.css";
import { useReduxState } from "../../../hooks/useReduxState";

const BaseSearchFields = ({ setSearchParams, searchParams, searchType }) => {
  const setLoading = useReduxAction(searchSlice.actions.setLoading);

  const collection = useReduxState(
    (state) =>
      state.search?.[
        searchType === "doctors" ? "collectionDoctors" : "collectionPatients"
      ]
  );

  const placeholderText =
    (searchType === "patients" && "Search by patient ID") ||
    (searchType === "doctors" && "Search doctor by email...");

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    setSearchParams({ search, page: "1" });
    if (!collection?.[search]?.["1"]) {
      console.log(collection)
      setLoading(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          name="search"
          id="searchInput"
          placeholder={placeholderText}
          aria-label="Search text"
          aria-describedby="basic-addon2"
          className={style["main-search-input-from-user-patients"]}
          defaultValue={searchParams.get("search") || ""}
        />
        <Button type="submit">Search</Button>
      </InputGroup>
    </Form>
  );
};

export default BaseSearchFields;
