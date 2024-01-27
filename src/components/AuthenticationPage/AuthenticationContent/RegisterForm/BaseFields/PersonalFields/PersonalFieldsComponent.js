import { Button, Spinner } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css";
import FieldBuilder from "../../../helpers/FieldBuilder";
import { doctorFields } from "./doctorFields";
import { nameFields } from "./namesFields";
import { patientFields } from "./patientFields";
import { pharmacistFields } from "./pharmacistFields";
import { useSelector } from "react-redux";

// Functional component for handling personal information fields
const PersonalFieldsComponent = ({
  registrationFormData,
  handleChange,
  backOnClick,
}) => {
  // Mapping profile types to their respective fields
  const ProfileFields = {
    patient: patientFields,
    doctor: doctorFields,
    pharmacist: pharmacistFields,
  };

  // Combining name fields with profile-specific fields based on the selected profile type
  const fields = nameFields.concat(ProfileFields[registrationFormData?.role]);

  // Loading for the request
  const loading = useSelector((state) => state.auth.loading);

  // Rendering the combined fields along with associated handlers and styles
  return (
    <>
      {fields.map((fieldData, index) => (
        // Using the FieldBuilder component to render each field
        <FieldBuilder
          key={index} // Assuming there's a unique key for each field
          handleChange={handleChange}
          formData={registrationFormData}
          fieldData={fieldData}
        />
      ))}

      {/* Buttons for navigating back or submitting the registration form */}
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
          {loading ? (
            <Spinner animation="border" size="sm" variant="light" />
          ) : (
            "Register"
          )}
        </Button>
      </div>
    </>
  );
};

export default PersonalFieldsComponent;
