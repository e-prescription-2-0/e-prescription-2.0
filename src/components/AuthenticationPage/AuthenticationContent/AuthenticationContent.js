import { useRef, useEffect } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "../AuthenticationPage.module.css"
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import { useNavigate } from "react-router-dom";

const AuthenticationContent = ({ formName, setForm }) => {
  const newRef = useRef(null);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setForm(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <>
      <div className={[style.wrapper, style.fadeInDown].join(' ')}>
        <div id={style["formContent"]} ref={newRef}>
          <FontAwesomeIcon
            className={style["closeIcon"]}
            onClick={() => {
              setForm(null)
              navigate('/')}}
            icon={faXmark}
          />

          {formName === "login" && <LoginForm setForm = {setForm}/>}
          {formName === "register" && <RegisterForm />}
          {formName === 'forgotPassword' && <ForgotPasswordForm/>}
          
        </div>
      </div>
    </>
  );
};

export default AuthenticationContent;
