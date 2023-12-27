import React, { useState } from "react";
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

const SearchDoctors = () => {
  const [active, setActive] = useState(1);
  const itemsPerPage = 10;
  const totalItems = doctorsData.length;

  const getPaginatedData = () => {
    const startIndex = (active - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return doctorsData.slice(startIndex, endIndex);
  };

  const [paginatedData, setPaginatedData] = useState(getPaginatedData());

  const handlePageClick = (pageNumber) => {
    setActive(pageNumber);
    setPaginatedData(getPaginatedData());
  };

  const itemsPagination = () => {
    const items = [];
    for (
      let number = 1;
      number <= Math.ceil(totalItems / itemsPerPage);
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

  return (
    <section className={style["main-search-doctors-section"]}>
      <DashboardNavigation />
      <Container className={style["main-search-doctors-container"]}>
        <h1 className="text-center">Търси Доктори</h1>
        <InputGroup className="mb-3">
          <FormControl
            id="filterInput"
            placeholder="Search names..."
            aria-label="Search names"
            aria-describedby="basic-addon2"
          />
          <Button>Search</Button>
        </InputGroup>
        <ListGroup as="ul" className="collection with-header">
          {paginatedData.map((data) => (
            <DoctorCard key={data._id} name={data.firstName} id={data._id} />
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
