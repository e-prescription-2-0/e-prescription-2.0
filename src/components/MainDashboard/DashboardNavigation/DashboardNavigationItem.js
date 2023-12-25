import { Nav } from "react-bootstrap";
import style from "./DashboardNavigation.module.css";

const DashboardNavigationItem = ({ icon, title, changeView }) => {

  const changeActiveItem = (e) => {
    changeView(e)
  }
   
  return (
    <Nav.Link onClick={changeActiveItem} className={style['aside-nav-list-item']}>
      {icon}
      <a id={style["btn"]}>{title}</a>
    </Nav.Link>
  );
};

export default DashboardNavigationItem;
