import { Button } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";
import FieldBuilder from "../../helpers/FieldBuilder";

const GetEmailAddress = ({ handleEmailChange, forgotPasswordFormData }) => {
  // Configuration for the email input field
  const emailField = {
    name: "email",
    placeholder: "Email Address",
    classes: ["fadeIn", "third", "col"],
    autoComplete: "email",
    fieldType: "text",
    option: undefined,
  };

  // Rendering the component for getting the email address
  return (
    <>
      <h4 className={[style["fadeIn"], style["first"]].join(" ")}>
        Forgot Password
      </h4>
      <p className={[style["fadeIn"], style["second"]].join(" ")}>
        Please enter your email address. You will receive an email with a code.
      </p>

      {/* Input field for entering the email address */}
      <FieldBuilder
        handleChange={handleEmailChange}
        formData={forgotPasswordFormData}
        fieldData={emailField}
      />

      {/* Button for moving to the next step */}
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

export default GetEmailAddress;
