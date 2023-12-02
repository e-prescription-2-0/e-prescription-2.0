import style from "./DashboardNavigationItem.module.css";

const DashboardNavigationItem = ({ icon, link }) => {
  return (
    <li className={style['aside-nav-list-item']}>
      {icon}
      {link}
    </li>
  );
};

export default DashboardNavigationItem;