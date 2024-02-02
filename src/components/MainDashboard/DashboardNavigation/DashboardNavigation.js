import { dashBoardNavData } from "../../../constants/dashBoardNavData"
import style from "./DashboardNavigation.module.css"

import { Container, Nav, Navbar } from "react-bootstrap"
import { useReduxState } from "../../../hooks/useReduxState"
import DashboardNavigationItem from "./DashboardNavigationItem"

const DashboardNavigation = () => {
  // const role = "doctor" // coming and depend of redux/context state;
  let role = "patient"
  const currentActiveLink = useReduxState((state) => state.dashboard.activeLink)
  const user = useReduxState((state) => state.auth.authUser)

  if (user) {
    role = user.role
  }

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
  )
}

export default DashboardNavigation
