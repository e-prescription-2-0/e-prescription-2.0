import { Button } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";
import FieldBuilder from "../../helpers/FieldBuilder";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EnterCodeFromEmail = ({
  handleCodeChange,
  forgotPasswordFormData,
  backOnClick,
}) => {
  const codeField = {
    name: "text",
    placeholder: "Code From Email",
    classes: ["fadeIn", "first", "col"],

    autoComplete: "email",

    fieldType: "text",
    option: undefined,
  };
  return (
    <>
      <h4>Forgot Password</h4>
      <p>We have send a text massage to ${} with authentication code</p>
      <FieldBuilder
        handleChange={handleCodeChange}
        formData={forgotPasswordFormData}
        fieldData={codeField}
      />
      <span>
        <FontAwesomeIcon icon={faRotateLeft} />
        send again
      </span>
      <div className={style["popup-form-button-holder"]}>
        <Button
          type="button"
          className={[
            style["fadeIn"],
            style["third"],
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
            style["third"],
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
