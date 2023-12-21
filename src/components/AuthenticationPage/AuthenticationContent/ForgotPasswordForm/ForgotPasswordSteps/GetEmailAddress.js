import { Button } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";
import FieldBuilder from "../../helpers/FieldBuilder";

const GetEmailAddress= ({handleEmailChange, setForgotPasswordFormData}) => {
    const emailField = {
      name: "email",
      placeholder: "Email Address",
      classes: ["fadeIn", "first", "col"],
  
      autoComplete: "email",
  
      fieldType: "text",
      option: undefined,
    };
    return (
      <>
        <h4>Forgot Password</h4>
        <p>Please enter your email address. You will reive email with code.</p>
        <FieldBuilder
          handleChange={handleEmailChange}
          formData={setForgotPasswordFormData}
          fieldData={emailField}
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
  };
  
  export default GetEmailAddress