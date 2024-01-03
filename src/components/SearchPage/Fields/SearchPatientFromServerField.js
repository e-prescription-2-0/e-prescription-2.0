import { Button, FormControl, InputGroup, Spinner } from "react-bootstrap";
import style from "../SearchPage.module.css";
import { usersSlice } from "../../../reducers/users";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useState } from "react";
import { useReduxState } from "../../../hooks/useReduxState";
import { searchSlice } from "../../../reducers/search";
import LoadingCircle from "../../Loadings/LoadingCircle/LoadingCircle";
const SearchPatientFromServerField = () => {
  const loadingPatient = useReduxState((state) => state.users.loadingPatient);
  const setLoading = useReduxAction(searchSlice.actions.setLoadingPatient);
  const [startLoadingPatient, setStartLoadingPatient] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchPatientProfile = useReduxAction(
    usersSlice.actions.fetchPatientProfile
  );

  const onClickSearchButton = () => {
    fetchPatientProfile(searchQuery);
    setStartLoadingPatient(true);
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        id="filterInput"
        placeholder="Search for patient in the server by id..."
        aria-label="Search text"
        aria-describedby="basic-addon2"
        value={searchQuery}
        isDisable={startLoadingPatient}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={style["main-search-input-for-single-patient"]}
      />
      <Button
        className={style["main-search-button-for-single-patient"]}
        onClick={onClickSearchButton}
      >
        {startLoadingPatient ? (
          <Spinner size="sm" animation="border" variant="light" />
        ) : (
          "Search"
        )}
      </Button>
    </InputGroup>
  );
};

export default SearchPatientFromServerField;
