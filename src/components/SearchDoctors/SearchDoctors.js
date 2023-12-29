import React, { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  ListGroup,
  Button,
  Pagination,
} from "react-bootstrap";
import DashboardNavigation from "../MainDashboard/DashboardNavigation/DashboardNavigation";
import style from "./SearchDoctors.module.css";
import { doctorsData } from "../../mockData";
import DoctorCard from "./DoctorCard";
import { useReduxAction } from "../../hooks/useReduxAction";
import {useReduxState} from "../../hooks/useReduxState" 
import { doctorsSlice } from "../../reducers/doctors";

const SearchDoctors = () => {
  const [active, setActive] = useState(1);
  const itemsPerPage = 10;

  const numberOfAllPages = useReduxState((state)=> state.doctors.numberOfAllPages)
  const getDoctors = useReduxAction(doctorsSlice.actions.fetchDoctors)



  const handlePageClick = (pageNumber) => {
    setActive(pageNumber);
    setPaginatedData(getPaginatedData());
  };

  const itemsPagination = () => {
    const items = [];
    for (
      let number = 1;
      number <= numberOfAllPages;
      number++
    ) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };


  useEffect(() => {
    getDoctors()
  }, [])


  return (
    <section className={style["main-search-doctors-section"]}>
      <DashboardNavigation />
      <Container className={style["main-search-doctors-container"]}>
        <h1 className="text-center">Търси Доктори</h1>
        <InputGroup className="mb-3">
          <FormControl
            id="filterInput"
            placeholder="Search doctor by email..."
            aria-label="Search email"
            aria-describedby="basic-addon2"
          />
          <Button>Search</Button>
        </InputGroup>
        <ListGroup as="ul" className="collection with-header">
          {paginatedData.map((data) => (
            <DoctorCard {...data} />
          ))}
        </ListGroup>

        <Pagination className={style["search-doctors-pagination"]}>
          {itemsPagination()}
        </Pagination>
      </Container>
    </section>
  );
};

export default SearchDoctors;
