import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import { navLinkConfig } from "../../../constants/navigation"
import style from "./Navigation.module.css"

export const Navigation = () => {
  const [currentUser, setCurrentUser] = useState("patient")
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`${style["navigation"]} ${
        isMobileMenuOpen ? style["open"] : ""
      }`}
    >
      <h3 className={style["navigation-logo-name"]}>e-Prescription</h3>
      <FontAwesomeIcon
        icon={faBars}
        className={style["mobile-menu-icon"]}
        onClick={toggleMobileMenu}
      />
      <ul
        className={`${style["navigation-list"]} ${
          isMobileMenuOpen ? style["open"] : ""
        }`}
      >
        {navLinkConfig.map((link) =>
          !link.hideFor.includes(currentUser) ? (
            <li key={link.id} className={style["navigation-list-item"]}>
              <Link
                to={link.linkTo}
                className={style["a"]}
                onClick={link.onClick}
              >
                {link.linkName}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  )
}
