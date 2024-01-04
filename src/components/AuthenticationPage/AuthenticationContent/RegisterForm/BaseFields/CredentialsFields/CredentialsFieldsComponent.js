import { credentialsFields } from "./credentialsFields";
import FieldBuilder from "../../../helpers/FieldBuilder";
import { Button } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css"

// Functional component for handling credentials fields
const CredentialsFieldsComponent = ({ registrationFormData, handleChange }) => {
  // Assuming credentialsFields is imported or defined somewhere
  const fields = credentialsFields;

  // Rendering each credentials field using the FieldBuilder component
  return (
    <>
      {fields.map((fieldData, index) => (
        <FieldBuilder
          key={index} // Assuming there's a unique key for each field
          handleChange={handleChange}
          formData={registrationFormData}
          fieldData={fieldData}
        />
      ))}

      {/* Button for advancing to the next step in the registration process */}
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

export default CredentialsFieldsComponent;