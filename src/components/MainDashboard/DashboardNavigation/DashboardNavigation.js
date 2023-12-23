import style from "./DashboardNavigation.module.css";
import { dashBoardNavData } from "../../../constants/dashBoardNavData";

import DashboardNavigationItem from "./DashboardNavigationItem";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";

const DashboardNavigation = () => {
  const role = "doctor"; // coming and depend of redux/context state

  return (
    <Navbar expand="lg" className={style["aside-navigation-container"]}>
      <Container className={style["boostrap-container-div-container"]}>
        <Navbar.Brand id={style["aside-navbar-brand"]} href="#home">
          Services
        </Navbar.Brand>
        <Navbar.Toggle id={style["aside-navbar-toggle"]} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className={style["aside-nav-list"]}>
            {dashBoardNavData[role].map((x, index) => (
              <DashboardNavigationItem key={index} {...x} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardNavigation;
