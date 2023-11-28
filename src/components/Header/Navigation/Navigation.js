import { useState } from "react"
import { navLinkConfig } from "../../../constants/navigation"
import style from "./Navigation.module.css"

export const Navigation = () => {
  const [currentUser, setCurrentUser] = useState("patient")

  let user = false

  const [isLoginClick, setLogin] = useState(false)

  const onClick = () => {
    // setLogin(isLoginClick = !isLoginClick)
  }

  return (
    <nav className={style["navigation"]}>
      <ul className={style["navigation-list"]}>
        {navLinkConfig.map((link) =>
          !link.hideFor.includes(currentUser) ? (
            <li className={style["navigation-list-item"]}>
              <a className={style["a"]} onClick={link.onClick}>
                {link.linkName}
              </a>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  )
}
