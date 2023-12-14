import { useCallback, useState } from "react";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";
import { Button, Form } from "react-bootstrap";
import style from "../../AuthenticationPage.module.css"

const RegisterForm = () => {
  const [registrationStep, setRegistrationStep] = useState(1);
  const [profile, setProfile] = useState("patient");
  const [validated, setValidated] = useState(false);
  const [registrationFormData, setRegistrationFormData] = useState({})

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      // event.stopPropagation();
      setValidated(true);
    } else {
      setRegistrationStep(2);
      setValidated(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...registrationFormData,
      [name]: value,
    };
    setRegistrationFormData(newData);
    
    if (name === 'repeatPassword') {
      const passwordField = document.getElementById('password');
      if (passwordField && passwordField.value !== value) {
        e.target.setCustomValidity('Passwords do not match.');
      } else {
        e.target.setCustomValidity('');
      }
    }
  };

  const renderRegistrationStep = useCallback(() => {
    switch (registrationStep) {
      case 1:
        return (
          <>
             
            <CredentialsFieldsComponent
              setProfile={setProfile}
              registrationFormData={registrationFormData}
              handleChange={handleChange}

            />
            <Button
              type="submit"
              className={[style["fadeIn"], style["fourth"], style["popup-form-button-next"], style['popup-form-button'] ].join(' ')}
              // onClick={() => setRegistrationStep(2)}
            >
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <PersonalFieldsComponent profile={profile} registrationFormData={registrationFormData} handleSubmit={handleSubmit} />
            <div className={style["popup-form-button-holder"]}>
              <Button
                type="button"
                className={[style["fadeIn"], style["fourth"], style["popup-form-button-back"], style['popup-form-button'] ].join(' ')}
                onClick={() => {
                  setValidated(false);
                  setRegistrationStep(1);
                }}
              >
                Back
              </Button>
              <Button type="submit" className={[style["fadeIn"], style["fourth"], style['popup-form-button'] ].join(' ')}>
                Register
              </Button>
            </div>
          </>
        );
    }
  }, [registrationStep, setRegistrationStep, registrationFormData, profile]);

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
