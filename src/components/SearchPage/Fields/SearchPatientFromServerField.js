import { Button, FormControl, InputGroup } from "react-bootstrap";
import style from "../SearchPage.module.css";
import { usersSlice } from "../../../reducers/users";
import { searchSlice } from "../../../reducers/search";
import { useNavigate } from "react-router-dom";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useState } from "react";
import { isEmpty } from "ramda";
import { useReduxState } from "../../../hooks/useReduxState";

const SearchPatientFromServerField = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const setLoading = useReduxAction(searchSlice.actions.setLoading);
  const fetchPatientProfile = useReduxAction(
    usersSlice.actions.fetchPatientProfile
  );
  const profile = useReduxState((state) => state.users.profile);

  const onClickSearchButton = () => {
    console.log("It workkssssssssss");
    setLoading(true);
    fetchPatientProfile(searchQuery);

  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        id="filterInput"
        placeholder="Search for patient in the server by id..."
        aria-label="Search text"
        aria-describedby="basic-addon2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={style["main-search-input-for-single-patient"]}
      />
      <Button onClick={onClickSearchButton}>Search</Button>
    </InputGroup>
  );
};

export default SearchPatientFromServerField;
