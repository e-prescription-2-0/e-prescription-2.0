import { credentialsFields } from "./credentialsFields";
import FieldBuilder from "../../../helpers/FieldBuilder";

const CredentialsFieldsComponent = ({
  registrationFormData,
  handleChange,
}) => {
  const fields = credentialsFields;
  return (
    <>
      {fields.map((fieldData) => {
        return (
          <FieldBuilder
            handleChange={handleChange}
            formData={registrationFormData}
            fieldData={fieldData}
          />
        );
      })}
    </>
  );
};

export default CredentialsFieldsComponent;
