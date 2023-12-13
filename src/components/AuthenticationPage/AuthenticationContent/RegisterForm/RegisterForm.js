import { useCallback, useState } from "react";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";

const RegisterForm = () => {
  const [registrationStep, setRegistrationStep] = useState(1);
  const [profile, setProfile] = useState("patient");

  const renderRegistrationStep = useCallback(() => {
    switch (registrationStep) {
      case 1:
        return (
          <>
            <CredentialsFieldsComponent setProfile={setProfile} />
            <button
              type="button"
              className="fadeIn fourth popup-form-button-next popup-form-button"
              onClick={() => setRegistrationStep(2)}
            >
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            <PersonalFieldsComponent profile={profile} />
            <div className="popup-form-button-holder">
              <button
                type="button"
                className="fadeIn fourth popup-form-button popup-form-button-back"
                onClick={() => setRegistrationStep(1)}
              >
                Back
              </button>
              <button type="button" className="fadeIn fourth popup-form-button">
                Register
              </button>
            </div>
          </>
        );
    }
  }, [registrationStep, setRegistrationStep]);

  return (
    <>
      <form>
        <h3>Register</h3>

        {renderRegistrationStep()}
      </form>
    </>
  );
};

export default RegisterForm;
