import style from "./DashboardNavigation.module.css";
import { dashBoardNavData } from "../../../constants/dashBoardNavData";

import DashboardNavigationItem from "./DashboardNavigationItem";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const DashboardNavigation = () => {
  const {role} = useSelector(state => state.auth.authUser) ?? {}


  return (
    
    
    <Navbar expand="xl" className={style["aside-navigation-container"]}>
      <Container className={style["boostrap-container-div-container"]}>
        <Navbar.Brand id={style["aside-navbar-brand"]} href="#home">
          Services
        </Navbar.Brand>
        <Navbar.Toggle
          id={style["aside-navbar-toggle"]}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse>
          <Nav className={style["aside-nav-list"]}>
            {dashBoardNavData[role]?.map((x, index) => (
              <DashboardNavigationItem key={index} {...x} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  
  );
};

export default DashboardNavigation;
