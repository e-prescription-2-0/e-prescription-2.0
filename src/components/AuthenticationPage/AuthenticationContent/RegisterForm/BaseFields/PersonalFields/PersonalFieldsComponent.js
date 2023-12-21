import { patientFields } from "./patientFields";
import { doctorFields } from "./doctorFields";
import { pharmacistFields } from "./pharmacistFields";
import { nameFields } from "./nameFields";
import FieldBuilder from "../../../helpers/FieldBuilder";

const PersonalFieldsComponent = ({
  registrationFormData,
  handleChange,
}) => {
  const ProfileFields = {
    patient: patientFields,
    doctor: doctorFields,
    pharmacist: pharmacistFields,
  };

  const fields = nameFields.concat(
    ProfileFields[registrationFormData?.profileType || "patient"]
  );

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

export default PersonalFieldsComponent;
