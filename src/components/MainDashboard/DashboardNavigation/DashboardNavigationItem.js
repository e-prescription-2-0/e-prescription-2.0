import { Nav } from "react-bootstrap";
import style from "./DashboardNavigation.module.css";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { dashboardSlice } from "../../../reducers/dashboard";
import { useReduxState } from "../../../hooks/useReduxState";

const DashboardNavigationItem = ({ icon, title, }) => {
  const setActiveLink = useReduxAction(dashboardSlice.actions.setActiveLink)
  const currentActiveLink = useReduxState((state) => state.dashboard.activeLink);
  const isActive = currentActiveLink === title;

  const changeActiveItem = (e) => {
    setActiveLink(e.target.innerHTML)
  }
   
  return (
    <Nav.Link onClick={changeActiveItem} className={isActive? style['aside-nav-list-item-active'] : style['aside-nav-list-item']}>
      {icon}
      <a id={style["btn"]}>{title}</a>
    </Nav.Link>
  );
};

export default DashboardNavigationItem;
