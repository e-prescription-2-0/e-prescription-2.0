import { useState } from "react";
import LogoAndIntroduction from "./Introduction/LogoAndIntroduction";
import Medications from "./Introduction/Medications";
import "./LoginRegister.css";
import LoginPopUpComponent from "./LoginRegisterPopUp/LoginRegisterPopUpComponent";

const LoginRegisterPage = () => {
  
    const [loginFormPopUp, setLoginFormPopUp] = useState(false)

    return (
    <>
      <div className="page">
        <Medications />
        <LogoAndIntroduction setLoginFormPopUp={setLoginFormPopUp}/>
        {loginFormPopUp && (<LoginPopUpComponent setLoginFormPopUp={setLoginFormPopUp}/>)}
      </div>
    </>
  );
};

export default LoginRegisterPage;
