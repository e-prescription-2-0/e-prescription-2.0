import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { navLinkConfig } from "../../../constants/navigation";
import style from "./Navigation.module.css";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { clearMessages } from "../../../reducers/messageDispatcher";
import { useSelector } from "react-redux";
import Messages from "../../Messages/Messages";


export const Navigation = () => {
  const {role,email} = useSelector(state => state.auth.authUser) ?? {role:'guest'};
  const messageState = useSelector(state => state.messages);
  const {isMessage,messages} = messageState;

  const dispatchClearMessageAction = useReduxAction(clearMessages)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if(isMessage) {
      
      const timeoutId = setTimeout(() => {
    
        dispatchClearMessageAction();
      }, 2000); 

      return () => clearTimeout(timeoutId);
    }
  },[isMessage,dispatchClearMessageAction])

  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <nav
      className={`${style["navigation"]} ${
        isMobileMenuOpen ? style["open"] : ""
      }`}
    >
      <h3 className={style["navigation-logo-name"]} onClick={()=>navigate("/")}>e-Prescription</h3>
      <FontAwesomeIcon
        icon={faBars}
        className={style["mobile-menu-icon"]}
        onClick={toggleMobileMenu}
      />
      {isMessage && 
         <Messages messages={messages}/>
        }
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
                to={link?.linkTo || '#'}
                onClick={link.onClick}
              >
                {link.linkName}
              </NavLink>
            </li>
          ) : null
        )}
   
      </ul>
      <p style={{color:'white'}}>{email}</p>
      
      
    </nav>
  );
};
