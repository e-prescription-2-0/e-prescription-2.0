import { Button, Container, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import DoctorCard from "./DoctorCard";
import SearchDoctorsPagination from "./SearchDoctorsPagination"
import style from "./SearchDoctors.module.css"
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { doctorsSlice } from "../../reducers/doctors";

const SearchDoctorsContent = () => {
  const doctors = useReduxState((state) => state.doctors.doctors);
  const doctorsPageSearch = useReduxState((state)=> state.doctors.doctorsPageSearch)
  const setDoctorsPageSearch = useReduxAction(doctorsSlice.actions.setDoctorsPageSearch)
  const setLoading = useReduxAction(doctorsSlice.actions.setLoading)



  const onChangeSearch = (e)=>{
    setDoctorsPageSearch(e.target.value)
  }
  return (
    <Container className={style["main-search-doctors-container"]}>
      <h1 className="text-center">Търси Доктори</h1>
      <InputGroup className="mb-3">
        <FormControl
          id="filterInput"
          placeholder="Search doctor by email..."
          aria-label="Search email"
          aria-describedby="basic-addon2"
          value={doctorsPageSearch}
          onChange={onChangeSearch}
        />
        <Button onClick={()=>setLoading(true)}>Search</Button>
      </InputGroup>
      <ListGroup as="ul" className="collection with-header">
        {doctors.map((data) => (
          <DoctorCard {...data} />
        ))}
      </ListGroup>

      <SearchDoctorsPagination/>
    </Container>
  );
};

export default SearchDoctorsContent;
