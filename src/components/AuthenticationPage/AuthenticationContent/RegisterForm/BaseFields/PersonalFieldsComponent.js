import PatientFieldsComponent from "./ProfileFields/PatientFieldsComponent";
import DoctorFieldsComponent from "./ProfileFields/DoctorFieldsComponent";
import PharmacistFieldsComponent from "./ProfileFields/PharmacistFieldsComponent";
import { Form } from "react-bootstrap";

const PersonalFieldsComponent = ({profile}) => {
  const ProfileFields = {
    patient: <PatientFieldsComponent />,
    doctor: <DoctorFieldsComponent />,
    pharmacist: <PharmacistFieldsComponent />,
  };

  return (
    <>
      
        <Form.Control
          type="text"
          id="firstName"
          className="fadeIn first"
          name="firstName"
          placeholder="First Name"
        />
        <Form.Control
          type="text"
          id="lastName"
          className="fadeIn second"
          name="lastName"
          placeholder="Last Name"
        />

      
      {ProfileFields[profile]}
    </>
  );
};

export default PersonalFieldsComponent;
