import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css";

const PatientFieldsComponent = ({handleChange, registrationFormData}) => {
  return (
    <>
      <Form.Control
        type="text"
        id="patientId"
        className={[style["fadeIn"], style["fourth"]].join(" ")}
        name="patientId"
        placeholder="PatientId"
        required
        value={registrationFormData?.patientId || ""}
        onChange={handleChange}
      />

      <select
        className={[
          style["form-select"],
          style["fadeIn"],
          style["fourth"],
        ].join(" ")}
        aria-label="Default select example"
        name="gender"
        value={registrationFormData?.gender || ""}
        onChange={handleChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <Form.Control
        type="date"
        id="dateOfBirth"
        className={[style["fadeIn"], style["fourth"]].join(" ")}
        name="dateOfBirth"
        placeholder="Date Of Birth"
        required
        value={registrationFormData?.dateOfBirth || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default PatientFieldsComponent;
