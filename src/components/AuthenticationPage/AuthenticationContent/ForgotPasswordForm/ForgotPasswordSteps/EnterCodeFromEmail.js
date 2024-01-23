import { Button } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";
import FieldBuilder from "../../helpers/FieldBuilder";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EnterCodeFromEmail = ({ handleCodeChange, forgotPasswordFormData, backOnClick }) => {
  // Configuration for the code input field
  const codeField = {
    name: "text",
    placeholder: "Code From Email",
    classes: ["fadeIn", "third", "col"],
    autoComplete: "email",
    fieldType: "text",
    option: undefined,
  };

  // Rendering the component for entering code from email
  return (
    <>
      <h4 className={[style["fadeIn"], style["first"]].join(" ")}>
        Forgot Password
      </h4>
      <p className={[style["fadeIn"], style["second"]].join(" ")}>
        We have sent a text message to { forgotPasswordFormData.email } with an authentication code
      </p>

      {/* Input field for entering the code */}
      <FieldBuilder
        handleChange={handleCodeChange}
        formData={forgotPasswordFormData}
        fieldData={codeField}
      />

      {/* Button to resend the email */}
      <span className={[style["fadeIn"], style["fourth"], style["send-email-again-span"]].join(" ")}>
        <FontAwesomeIcon icon={faRotateLeft} />
        send again
      </span>

      {/* Buttons for navigation and validation */}
      <div className={style["popup-form-button-holder"]}>
        <Button
          type="button"
          className={[
            style["fadeIn"],
            style["fourth"],
            style["popup-form-button-back"],
            style["popup-form-button"],
          ].join(" ")}
          onClick={backOnClick}
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
          Validate Code
        </Button>
      </div>
    </>
  );
};

export default EnterCodeFromEmail;
