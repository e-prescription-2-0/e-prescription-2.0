import { useState } from "react";
import "./LoginRegister.css";
import LoginPopUpComponent from "./LoginRegisterPopUp/LoginRegisterPopUpComponent";

const LoginRegisterPage = () => {
    const [formName, setForm] = useState('register')
    return (
    <>
      <div className="page-pop-up">
        {formName && (<LoginPopUpComponent formName={formName} setForm={setForm}/> )}
      </div>
    </>
  );
};

export default LoginRegisterPage;
