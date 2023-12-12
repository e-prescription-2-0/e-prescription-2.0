import { useState } from "react";
import "./LoginRegister.css";
import AuthenticationContent from "./AuthenticationContent/AuthenticationContent";

const AuthenticationPage = () => {
    const [formName, setForm] = useState('register') // the formName should be one of the three login register or null
    return (
    <>
      <div className="page-pop-up">
        {formName && (<AuthenticationContent formName={formName} setForm={setForm}/> )}
      </div>
    </>
  );
};

export default AuthenticationPage;
