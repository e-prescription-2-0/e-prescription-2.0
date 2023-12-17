import { PatientFields } from "./PersonalFields/PatientFieldsComponent";
import { DoctorFields } from "./PersonalFields/DoctorFieldsComponent";
import { PharmacistFields } from "./PersonalFields/PharmacistFieldsComponent";
import { NameFields } from "./PersonalFields/NameFields";
import RegisterField from "../RegisterField";

const PersonalFieldsComponent = ({
  profileType,
  registrationFormData,
  handleChange,
}) => {
  const ProfileFields = {
    patient: PatientFields,
    doctor: DoctorFields,
    pharmacist: PharmacistFields,
  };

  const fields = NameFields.concat(
    ProfileFields[registrationFormData?.profileType || "patient"]
  );

  return (
    <>
      {fields.map((fieldData) => {
        console.log(fieldData);

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

export default PersonalFieldsComponent;
