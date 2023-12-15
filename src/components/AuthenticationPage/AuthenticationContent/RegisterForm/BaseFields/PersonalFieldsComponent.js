import PatientFieldsComponent from "./ProfileFields/PatientFieldsComponent";
import DoctorFieldsComponent from "./ProfileFields/DoctorFieldsComponent";
import PharmacistFieldsComponent from "./ProfileFields/PharmacistFieldsComponent";
import { Form } from "react-bootstrap";
import style from "../../../AuthenticationPage.module.css";

const PersonalFieldsComponent = ({ profileType, registrationFormData , handleChange}) => {
  const ProfileFields = {
    patient: (
      <PatientFieldsComponent
        registrationFormData={registrationFormData}
        handleChange={handleChange}
      />
    ),
    doctor: (
      <DoctorFieldsComponent
        registrationFormData={registrationFormData}
        handleChange={handleChange}
      />
    ),
    pharmacist: (
      <PharmacistFieldsComponent
        registrationFormData={registrationFormData}
        handleChange={handleChange}
      />
    ),
  };

  return (
    <>
      <Form.Control
        type="text"
        id="firstName"
        className={[style["fadeIn"], style["first"]].join(" ")}
        name="firstName"
        placeholder="First Name"
        required
        value={registrationFormData?.firstName || ""}
        onChange={handleChange}

        // pattern="^[A-Za-z]+(?: [A-Za-z]+)?$"
      />
      <Form.Control
        type="text"
        id="lastName"
        className={[style["fadeIn"], style["second"]].join(" ")}
        name="lastName"
        placeholder="Last Name"
        required
        value={registrationFormData?.lastName || ""}
        onChange={handleChange}

        // pattern="^[A-Za-z]+(?: [A-Za-z]+)?$"
      />

      {ProfileFields[profileType]}
    </>
  );
};

export default PersonalFieldsComponent;
