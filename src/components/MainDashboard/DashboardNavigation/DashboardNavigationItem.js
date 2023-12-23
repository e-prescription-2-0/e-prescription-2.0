import { Nav } from "react-bootstrap";
import style from "./DashboardNavigation.module.css";

const DashboardNavigationItem = ({ icon, link }) => {
  return (
    <Nav.Link className={style['aside-nav-list-item']}>
      {icon}
      {link}
    </Nav.Link>
  );
};

export default DashboardNavigationItem;
