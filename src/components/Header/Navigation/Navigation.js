import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinkConfig } from "../../../constants/navigation";
import style from "./Navigation.module.css";

export const Navigation = () => {
  const [currentUser, setCurrentUser] = useState("patient");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${style["navigation"]} ${isMobileMenuOpen ? style["open"] : ""}`}>
      <FontAwesomeIcon icon={faBars} className={style["mobile-menu-icon"]} onClick={toggleMobileMenu} />
      <ul className={`${style["navigation-list"]} ${isMobileMenuOpen ? style["open"] : ""}`}>
        {navLinkConfig.map((link) =>
          !link.hideFor.includes(currentUser) ? (
            <li className={style["navigation-list-item"]} key={link.linkName}>
              <a className={style["a"]} onClick={link.onClick}>
                {link.linkName}
              </a>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};