import Form from "react-bootstrap/Form";
import style from "../../../AuthenticationPage.module.css";
import { registrationValidationRegex } from "../registrationValidationRegex";
import { CredentialsFields } from "./CredentialsFields";
import RegisterField from "../RegisterField";

const CredentialsFieldsComponent = ({
  profileType,
  setProfileType,
  registrationFormData,
  handleChange,
}) => {
  const fields = CredentialsFields;
  return (
    <>
      {fields.map((fieldData) => {
        return (
          <RegisterField
            handleChange={handleChange}
            registrationFormData={registrationFormData}
            fieldData={fieldData}
          />
        );
      })}
    </>
  );
};

export default CredentialsFieldsComponent;
