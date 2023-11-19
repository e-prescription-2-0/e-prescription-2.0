import { useRef, useState, useEffect } from "react";
import LoginFormComponent from "./LoginForm/LoginFormComponent";
import RegisterFormComponent from "./RegisterForm/RegisterFormComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const LoginPopUpComponent = ({setLoginFormPopUp}) => {
  const [formName, setForm] = useState('login')

  const newRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setLoginFormPopUp(false)
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
        <FontAwesomeIcon className="closeIcon" onClick={()=>setLoginFormPopUp(false)} icon={faCircleXmark} />
          {/* <!-- Tabs Titles --> */}
          <h2 onClick={()=>{setForm('login')}} className={formName === 'login'? 'active':'inactive underlineHover'}>Sign In</h2>
          <h2 onClick={()=>{setForm('register')}} className={formName === 'register'? 'active':'inactive underlineHover'}>Sign Up</h2>

          
          {/* <!-- Login Form --> */}

          {formName === 'login'&& <LoginFormComponent/>}
          {formName ==='register' && <RegisterFormComponent/>}


        </div>
      </div>
    </>
  );
};

export default LoginPopUpComponent;
