import { Button } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";
import FieldBuilder from "../../helpers/FieldBuilder";


const CreateNewPassword = ({ handleCodeChange, forgotPasswordFormData }) => {
  // Array of password-related field configurations
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

  // Rendering the new password form
  return (
    <>
      <h4 className={[style["fadeIn"], style["first"]].join(" ")}>
        New Password
      </h4>

      {/* Mapping over passwordFields to render password-related input fields */}
      {passwordFields.map((fieldData, index) => (
        <FieldBuilder
          key={index} // Assuming there's a unique key for each field
          handleChange={handleCodeChange}
          formData={forgotPasswordFormData}
          fieldData={fieldData}
        />
      ))}

      {/* Button for resetting the password */}
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