
import { useState } from "react";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";

const RegisterForm = () => {
  const [registrationStep, setRegistrationStep] = useState(1)
  const [profile, setProfile] = useState("patient");

  return (
    <>
      <form>
        <h3>Register</h3>
        <div className={registrationStep!==1 && 'hideFields'}>
          <CredentialsFieldsComponent setProfile={setProfile}/>
          <button type="button" className="fadeIn fourth popup-form-button-next popup-form-button"  onClick={()=>setRegistrationStep(2)}>Next</button>
          
        </div>
        <div className={registrationStep!==2 && 'hideFields'}>
          <PersonalFieldsComponent profile={profile}/>
          <button type="submit" className="fadeIn fourth popup-form-button" >Register</button>
        </div>

      </form>
    </>
  );
};

export default RegisterForm;
