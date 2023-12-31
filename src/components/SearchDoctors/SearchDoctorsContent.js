import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import SearchDoctorsPagination from "./SearchDoctorsPagination";
import style from "./SearchDoctors.module.css";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { doctorsSlice } from "../../reducers/doctors";
import NoDoctorsFound from "./NoDoctorsFound";
import ListDoctors from "./ListDoctors";
import { isEmpty } from "ramda";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchDoctorsContent = ({setSearchParams, searchParams}) => {
  const doctors = useReduxState((state) => state.doctors.doctors);

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  const doctorsPageSearch = useReduxState(
    (state) => state.doctors.doctorsPageSearch
  );
  const setDoctorsPageSearch = useReduxAction(
    doctorsSlice.actions.setDoctorsPageSearch
  );
  const setLoading = useReduxAction(doctorsSlice.actions.setLoading);

  const onChangeSearch = (e) => {
    setSearchQuery(e.target.value)
 
  };
  const onClickSearchButton = ()=>{
    
    setSearchParams({ search: searchQuery , page: '1' })

    setLoading(true)

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
          value={searchQuery}
          onChange={onChangeSearch}
          
        />
        <Button onClick={onClickSearchButton}>Search</Button>
      </InputGroup>
      {!isEmpty(doctors) ? <ListDoctors /> : <NoDoctorsFound />}

      <SearchDoctorsPagination  setSearchParams={setSearchParams} searchParams={searchParams}/>
    </Container>
  );
};

export default SearchDoctorsContent;
