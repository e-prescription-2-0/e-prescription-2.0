import { useState } from "react";
import LoginFormComponent from "./LoginForm/LoginFormComponent";
import RegisterFormComponent from "./RegisterForm/RegisterFormComponent";

const LoginPopUpComponent = () => {
  const [formName, setForm] = useState('login')
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}
          <h2 onClick={()=>{setForm('login')}} className={formName === 'login'? 'active':'inactive underlineHover'}>Sign In</h2>
          <h2 onClick={()=>{setForm('register')}} className={formName === 'register'? 'active':'inactive underlineHover'}>Sign Up</h2>

          
          {/* <!-- Login Form --> */}

          {formName === 'login'&& <LoginFormComponent/>}
          {formName === 'register'&& <RegisterFormComponent/>}


        </div>
      </div>
    </>
  );
};

export default LoginPopUpComponent;
