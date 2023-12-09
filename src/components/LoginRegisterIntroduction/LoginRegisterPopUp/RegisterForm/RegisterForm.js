
import { useState } from "react";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";

const RegisterForm = () => {
  const [numberPart, setNumberPart] = useState(1)
  const [profile, setProfile] = useState("patient");

  return (
    <>
      <form>
        <h3>Register</h3>
        <div className={numberPart!==1 && 'hideFields'}>
          <CredentialsFieldsComponent setProfile={setProfile}/>
          <button type="button" className="fadeIn fourth popup-form-button-next popup-form-button"  onClick={()=>setNumberPart(2)}>Next</button>
          
        </div>
        <div className={numberPart!==2 && 'hideFields'}>
          <PersonalFieldsComponent profile={profile}/>
          <button type="submit" className="fadeIn fourth popup-form-button" >Register</button>
        </div>

      </form>
    </>
  );
};

export default RegisterForm;
