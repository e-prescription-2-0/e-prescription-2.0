import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import style from "../SearchPage.module.css";
import { usersSlice } from "../../../reducers/users";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useEffect, useRef, useState } from "react";
import { useReduxState } from "../../../hooks/useReduxState";
import { searchSlice } from "../../../reducers/search";

const SearchPatientFromServerField = () => {
  const setErrorFetchingPatient = useReduxAction(
    searchSlice.actions.setErrorFetchingPatient
  );
  const [startLoadingPatient, setStartLoadingPatient] = useState(false);
  const fetchPatientProfile = useReduxAction(
    usersSlice.actions.fetchPatientProfile
  );
  const errorFetchingPatient = useReduxState(
    (state) => state.search.errorFetchingPatient
  );

  const searchQueryRef = useRef(""); // Create a ref for the input value

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(false)
    fetchPatientProfile(searchQueryRef.current.value);
    setStartLoadingPatient(true);
  };

  useEffect(() => {
    if (errorFetchingPatient) {
      console.log("I come hereeee");
      setValidated(true);
      setStartLoadingPatient(false);
      searchQueryRef.current.setCustomValidity("Wrong Patient ID");
      console.log("validated: ", validated);
      setErrorFetchingPatient(false);
    }
  }, [
    errorFetchingPatient,
    setStartLoadingPatient,
    setValidated,
    setErrorFetchingPatient,
    searchQueryRef,
  ]);
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          ref={searchQueryRef} // Assign the ref to the input element
          id="filterInputPatient"
          placeholder="Search for patient in the server by id..."
          aria-label="Search text"
          aria-describedby="basic-addon2"
          disabled={startLoadingPatient}
          className={style["main-search-input-for-single-patient"]}
          required
        />
        <Button
          type="submit"
          className={style["main-search-button-for-single-patient"]}
        >
          {startLoadingPatient ? (
            <Spinner size="sm" animation="border" variant="light" />
          ) : (
            "Search"
          )}
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchPatientFromServerField;
