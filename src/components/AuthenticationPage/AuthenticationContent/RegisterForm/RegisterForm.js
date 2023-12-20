// Import necessary modules and components from React and Bootstrap
import React, { useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import style from "../../AuthenticationPage.module.css";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFieldsComponent";
import { validationRegex } from "../validationRegex";
import { validateInputBaseOnRegex, validatePasswordMatch } from "../helperAuthenticationFunctions";

// Define the RegisterForm component
const RegisterForm = () => {
  // State variables to manage registration steps, profile type, validation, and form data
  const [registrationStep, setRegistrationStep] = useState(1);
  const [profileType, setProfileType] = useState("patient");
  const [validated, setValidated] = useState(false);
  const [registrationFormData, setRegistrationFormData] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    // Check form validity
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      // Move to the next registration step if the form is valid
      setRegistrationStep(2);
      setValidated(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data with the new input value
    const newData = {
      ...registrationFormData,
      [name]: value,
    };
    setRegistrationFormData(newData);


    // Validate input based on predefined regex patterns
    if (name in validationRegex) {
      const regex = validationRegex[name].validation;
      const errorMessage = validationRegex[name].errorMessage
      validateInputBaseOnRegex(e,regex, value, errorMessage)
    }

    // Validate password match
    if (name === "password" || name === "repeatPassword") {
      validatePasswordMatch(name, value,  registrationFormData)
    }

    
  };

  // Render the appropriate registration step based on the current step
  const renderRegistrationStep = useCallback(() => {
    switch (registrationStep) {
      case 1:
        return (
          <>
            <CredentialsFieldsComponent
              profileType={profileType}
              setProfileType={setProfileType}
              registrationFormData={registrationFormData}
              handleChange={handleChange}
            />
            <Button
              type="submit"
              className={[
                style["fadeIn"],
                style["fourth"],
                style["popup-form-button-next"],
                style["popup-form-button"],
              ].join(" ")}
            >
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <PersonalFieldsComponent
              profileType={profileType}
              registrationFormData={registrationFormData}
              handleChange={handleChange}
            />
            <div className={style["popup-form-button-holder"]}>
              <Button
                type="button"
                className={[
                  style["fadeIn"],
                  style["fourth"],
                  style["popup-form-button-back"],
                  style["popup-form-button"],
                ].join(" ")}
                onClick={() => {
                  setValidated(false);
                  setRegistrationStep(1);
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                className={[
                  style["fadeIn"],
                  style["fourth"],
                  style["popup-form-button"],
                ].join(" ")}
              >
                Register
              </Button>
            </div>
          </>
        );
      default:
        return <>Wrong Step!</>;
    }
  }, [
    registrationStep,
    setRegistrationStep,
    registrationFormData,
    profileType,
    setProfileType,
    handleChange,
  ]);

  // Render the main registration form
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Register</h3>
        {renderRegistrationStep()}
      </Form>
    </>
  );
};

// Export the RegisterForm component
export default RegisterForm;