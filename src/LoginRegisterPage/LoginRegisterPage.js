import { useState } from "react";
import LogoComponent from "./components/LogoComponent";
import MedicationsComponent from "./components/MedicationsComponent";
import "./style.css";
import LoginPopUpComponent from "./components/LoginPopUpComponent";

const LoginRegisterPage = () => {
  
    const [loginFormPopUp, setLoginFormPopUp] = useState(false)

    return (
    <>
      <div className="page">
        <MedicationsComponent />
        <LogoComponent setLoginFormPopUp={setLoginFormPopUp}/>
        {loginFormPopUp && (<LoginPopUpComponent/>)}
      </div>
    </>
  );
};

export default LoginRegisterPage;
