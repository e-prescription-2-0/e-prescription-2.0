import { Button, FormControl, InputGroup } from "react-bootstrap";
import style from '../SearchPage.module.css'

const SearchPatientFromServerField = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        id="filterInput"
        placeholder="Search for patient in the server by id..."
        aria-label="Search text"
        aria-describedby="basic-addon2"
        className={style["main-search-input-for-single-patient"]}
      />
      <Button>Search</Button>
    </InputGroup>
  );
};

export default SearchPatientFromServerField;
