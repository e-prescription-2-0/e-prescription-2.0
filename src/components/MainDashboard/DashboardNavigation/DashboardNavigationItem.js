import { NavLink } from "react-router-dom"
import style from "./DashboardNavigation.module.css"

const DashboardNavigationItem = ({ icon, linkTo, text }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? [style["nav-active"], style["aside-nav-list-item"]].join(" ")
          : [style["aside-nav-list-item"]].join(" ")
      }
      to={linkTo}
    >
      {icon}
      <p className={style["text-color-navigation"]}>{text}</p>
    </NavLink>
  )
}

export default DashboardNavigationItem
