import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { navLinkConfig } from "../../constants/navigation"
import style from "./Navigation.module.css"

export const Navigation = () => {
  const { role, email, firstName } = useSelector(
    (state) => state.auth.authUser
  ) ?? {
    role: "guest",
  }

  const isDesktop = useMediaQuery({ minWidth: 900 })

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`${style["navigation"]} ${
        isMobileMenuOpen ? style["open"] : ""
      }`}
    >
      <h3
        className={style["navigation-logo-name"]}
        onClick={() => navigate("/")}
      >
        e-Prescription
      </h3>
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
          !link.hideFor.includes(role) ? (
            <li key={link.id} className={style["navigation-list-item"]}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style["nav-active"] : "a"
                }
                to={link?.linkTo || "#"}
                onClick={link.onClick}
              >
                {link.linkName}
              </NavLink>
            </li>
          ) : null
        )}
      </ul>
      {email && isDesktop && (
        <p style={{ color: "white" }}>
          Здравейте,{" "}
          <Link className={style["user-name-link-to-profile"]} to={"/profile"}>
            {firstName}
          </Link>
        </p>
      )}
    </nav>
  )
}
