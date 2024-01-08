// Import necessary modules and components from React and Bootstrap
import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import CredentialsFieldsComponent from "./BaseFields/CredentialsFields/CredentialsFieldsComponent";
import PersonalFieldsComponent from "./BaseFields/PersonalFields/PersonalFieldsComponent";
import { validationRegex } from "../helpers/validationRegex";
import {
  validateInputBaseOnRegex,
  validatePasswordMatch,
} from "../helpers/helperAuthenticationFunctions";
import style from "../../AuthenticationPage.module.css";
import { fetchRegisteredUser } from "../../../../reducers/auth";
import { useReduxAction } from "../../../../hooks/useReduxAction";

// Define the RegisterForm component
const RegisterForm = () => {
  // State variables to manage registration steps, profile type, validation, and form data
  const [registrationStep, setRegistrationStep] = useState(1);
  const [validated, setValidated] = useState(false);
  const [registrationFormData, setRegistrationFormData] = useState({});
  const dispatchSetAuthUser = useReduxAction(fetchRegisteredUser) 

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
   if(registrationStep ===2 ) {
     dispatchSetAuthUser(registrationFormData)
   }
    
  };

  // Render the appropriate registration step based on the current step
  const renderRegistrationStep = useCallback(() => {
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
        const errorMessage = validationRegex[name].errorMessage;
        validateInputBaseOnRegex(e, regex, value, errorMessage);
      }

      // Validate password match
      if (name === "password" || name === "repeatPassword") {
        validatePasswordMatch(name, value, registrationFormData);
      }
    };

    const backOnClick = () => {
      setValidated(false);
      setRegistrationStep(registrationStep - 1);
    };

    switch (registrationStep) {
      case 1:
        return (
          <>
            <CredentialsFieldsComponent
              registrationFormData={registrationFormData}
              handleChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <PersonalFieldsComponent
              registrationFormData={registrationFormData}
              handleChange={handleChange}
              backOnClick={backOnClick}
            />
          </>
        );
      default:
        return <>Wrong Step!</>;
    }
  }, [registrationStep, setRegistrationStep, registrationFormData]);

  // Render the main registration form
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3 className={[style["fadeIn"], style["first"]].join(" ")}>
          Register
        </h3>
        {renderRegistrationStep()}
      </Form>
    </>
  );
};

// Export the RegisterForm component
export default RegisterForm;
