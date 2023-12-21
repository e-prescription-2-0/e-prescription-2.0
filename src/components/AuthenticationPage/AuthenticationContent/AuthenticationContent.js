import { useRef, useEffect } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "../AuthenticationPage.module.css"

const AuthenticationContent = ({ formName, setForm }) => {
  const newRef = useRef(null);

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
            onClick={() => setForm(null)}
            icon={faXmark}
          />
          {/* <!-- Tabs Titles --> */}
          {/* <h2 onClick={()=>{setForm('login')}} className={formName === 'login'? 'active':'inactive underlineHover'}>Sign In</h2>
          <h2 onClick={()=>{setForm('register')}} className={formName === 'register'? 'active':'inactive underlineHover'}>Sign Up</h2>

           */}
          {/* <!-- Login Form --> */}

          {formName === "login" && <LoginForm setForm = {setForm}/>}
          {formName === "register" && <RegisterForm />}
          {formName === 'forgotPassword'}
          
        </div>
      </div>
    </>
  );
};

export default AuthenticationContent;
