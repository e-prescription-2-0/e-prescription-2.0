import PatientFieldsComponent from "./BaseFields/ProfileFields/PatientFieldsComponent";
import DoctorFieldsComponent from "./BaseFields/ProfileFields/DoctorFieldsComponent";
import PharmacistFieldsComponent from "./BaseFields/ProfileFields/PharmacistFieldsComponent";
import { useState } from "react";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";

const RegisterForm = () => {
  const [numberPart, setNumberPart] = useState(1)
  return (
    <>
      <form>
        <div className={numberPart!==1 && 'hideFields'}>
          <CredentialsFieldsComponent />
          <h2 className="next"  onClick={()=>setNumberPart(2)}>Next</h2>
          
        </div>
        <div className={numberPart!==2 && 'hideFields'}>
          <PersonalFieldsComponent />
          <input type="submit" className="fadeIn fourth" value="Register" />
        </div>

      </form>
    </>
  );
};

export default RegisterForm;
