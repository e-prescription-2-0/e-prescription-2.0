import { useCallback, useState } from "react";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";
import { Button, Form } from "react-bootstrap";

const RegisterForm = () => {
  const [registrationStep, setRegistrationStep] = useState(1);
  const [profile, setProfile] = useState("patient");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setRegistrationStep(2);
      setValidated(false);
    }
  };

  const renderRegistrationStep = useCallback(() => {
    switch (registrationStep) {
      case 1:
        return (
          <>
            <CredentialsFieldsComponent setProfile={setProfile} />
            <Button
              type="submit"
              className="fadeIn fourth popup-form-button-next popup-form-button"
              // onClick={() => setRegistrationStep(2)}
            >
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <PersonalFieldsComponent profile={profile} />
            <div className="popup-form-button-holder">
              <Button
                type="button"
                className="fadeIn fourth popup-form-button popup-form-button-back"
                onClick={() => {
                  setValidated(false);
                  setRegistrationStep(1);
                }}
              >
                Back
              </Button>
              <Button type="submit" className="fadeIn fourth popup-form-button">
                Register
              </Button>
            </div>
          </>
        );
    }
  }, [registrationStep, setRegistrationStep]);

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Register</h3>

        {renderRegistrationStep()}
      </Form>
    </>
  );
};

export default RegisterForm;
