import { useRef, useEffect } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const LoginPopUpComponent = ({ formName, setForm }) => {
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
      <div className="wrapper fadeInDown">
        <div id="formContent" ref={newRef}>
          <FontAwesomeIcon
            className="closeIcon"
            onClick={() => setForm(null)}
            icon={faXmark}
          />
          {/* <!-- Tabs Titles --> */}
          {/* <h2 onClick={()=>{setForm('login')}} className={formName === 'login'? 'active':'inactive underlineHover'}>Sign In</h2>
          <h2 onClick={()=>{setForm('register')}} className={formName === 'register'? 'active':'inactive underlineHover'}>Sign Up</h2>

           */}
          {/* <!-- Login Form --> */}

          {formName === "login" && <LoginForm />}
          {formName === "register" && <RegisterForm />}
        </div>
      </div>
    </>
  );
};

export default LoginPopUpComponent;
