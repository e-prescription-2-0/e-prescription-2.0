import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  ListGroup,
  Button,
} from "react-bootstrap";
import DashboardNavigation from "../MainDashboard/DashboardNavigation/DashboardNavigation";
import style from "./SearchDoctors.module.css";

const SearchDoctors = () => {
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
          <ListGroup.Item as="li" className="collection-header">
            <h5>A</h5>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="collection-item">
            <a href="#">Abe</a>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="collection-item">
            <a href="#">Adam</a>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="collection-item">
            <a href="#">Alen</a>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="collection-item">
            <a href="#">Anna</a>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="collection-header">
            <h5>B</h5>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="collection-item">
            <a href="#">Anna</a>
          </ListGroup.Item>
          {/* ... (Repeat the pattern for other letters and names) */}
        </ListGroup>
      </Container>
    </section>
  );
};

export default SearchDoctors;
