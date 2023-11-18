import { useState } from "react";
import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";

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

          {/* <!-- Remind Password --> */}
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopUpComponent;
