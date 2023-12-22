import { Button } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";
import FieldBuilder from "../../helpers/FieldBuilder";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNewPassword = ({
  handleCodeChange,
  forgotPasswordFormData,
}) => {
  const passwordFields = [
    {
      name: "password",
      placeholder: "New Password",
      classes: ["fadeIn", "first", "col"],

      autoComplete: "new-password",

      fieldType: "password",
      option: undefined,
    },
    {
      name: "repeatPassword",
      placeholder: "Confirm Password",
      classes: ["fadeIn", "second", "col"],

      autoComplete: "new-password",

      fieldType: "password",
      option: undefined,
    },
  ];
  return (
    <>
      <h4>New Password</h4>

      {passwordFields.map((fieldData) => (
        <FieldBuilder
          handleChange={handleCodeChange}
          formData={forgotPasswordFormData}
          fieldData={fieldData}
        />
      ))}

      <Button
        type="submit"
        className={[
          style["fadeIn"],
          style["third"],
          style["popup-form-button"],
        ].join(" ")}
      >
        Reset Password
      </Button>
    </>
  );
};

export default CreateNewPassword;
