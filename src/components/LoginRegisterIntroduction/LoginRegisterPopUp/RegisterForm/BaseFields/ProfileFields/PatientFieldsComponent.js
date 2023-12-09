import { Form } from "react-bootstrap";

const PatientFieldsComponent = () => {
  return (
    <>
      <Form.Control
        type="text"
        id="patientId"
        className="fadeIn fourth"
        name="patientId"
        placeholder="PatientId"
      />
      
      <select class="form-select fadeIn fourth" aria-label="Default select example  ">
          <option value="male">Male</option>
          <option value="female">Female</option>
      </select>

      <Form.Control
        type="date"
        id="dateOfBirth"
        className="fadeIn fourth"
        name="dateOfBirth"
        placeholder="Date Of Birth"
      />

      
    </>
  );
};

export default PatientFieldsComponent;
