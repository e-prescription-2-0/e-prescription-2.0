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
  const [showDoctorList, setShowDoctorList] = useState(
    // doctorsData.slice((active - 1) * itemsPerPage, active * itemsPerPage)
    []
  );

  const handlePageClick = (pageNumber) => {
    setActive(pageNumber);
    setShowDoctorList((prevList) => {
      const newList = doctorsData.slice(
        (pageNumber - 1) * itemsPerPage,
        pageNumber * itemsPerPage
      );
      return newList;
    });
  };
  const itemsPagination = () => {
    const items = [];
    for (
      let number = 1;
      number <= Math.ceil(doctorsData.length / itemsPerPage);
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
          {showDoctorList.map((data) => (
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
