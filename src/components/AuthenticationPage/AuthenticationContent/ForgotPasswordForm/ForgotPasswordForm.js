import { Form } from "react-bootstrap";
import style from "../../AuthenticationPage.module.css";
import { useCallback, useState } from "react";
import GetEmailAddress from "./ForgotPasswordSteps/GetEmailAddress";
import EnterCodeFromEmail from "./ForgotPasswordSteps/EnterCodeFromEmail";
import CreateNewPassword from "./ForgotPasswordSteps/CreateNewPassword";
import { validationRegex } from "../helpers/validationRegex";
import { validateInputBaseOnRegex } from "../helpers/helperAuthenticationFunctions";

const ForgotPasswordForm = () => {
  // State for form data, current step, and form validation
  const [forgotPasswordFormData, setForgotPasswordFormData] = useState({});
  const [forgotPasswordStep, setForgotPasswordStep] = useState(1);
  const [validated, setValidated] = useState(false);

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Check form validity
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      const nextStep = forgotPasswordStep + 1;
      // Move to the next registration step if the form is valid
      setForgotPasswordStep(nextStep < 3 ? nextStep : 3);
      setValidated(false);
    }
  };

  // Render the appropriate registration step based on the current step
  const renderForgotPasswordStep = useCallback(() => {
    const handleChange = (e) => {
      const { name, value } = e.target;

      setForgotPasswordFormData({
        ...forgotPasswordFormData,
        [name]: value,
      });

      if (name in validationRegex) {
        const regex = validationRegex[name].validation;
        const errorMessage = validationRegex[name].errorMessage;
        validateInputBaseOnRegex(e, regex, value, errorMessage);
      }
    };

    const backOnClick = () => {
      setValidated(false);
      setForgotPasswordStep(forgotPasswordStep - 1);
    };

    // Rendering different steps based on the current step
    switch (forgotPasswordStep) {
      case 1:
        return (
          <GetEmailAddress
            handleEmailChange={handleChange}
            forgotPasswordFormData={forgotPasswordFormData}
          />
        );
      case 2:
        return (
          <EnterCodeFromEmail
            handleCodeChange={handleChange}
            forgotPasswordFormData={forgotPasswordFormData}
            backOnClick={backOnClick}
          />
        );
      case 3:
        return (
          <CreateNewPassword
            handleCodeChange={handleChange}
            forgotPasswordFormData={forgotPasswordFormData}
          />
        );
      default:
        return <>Wrong Step!</>;
    }
  }, [forgotPasswordStep, forgotPasswordFormData]);

  // Rendering the main form component
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={style["form-forgot-password"]}
    >
      {renderForgotPasswordStep()}
    </Form>
  );
};

export default ForgotPasswordForm;