import { Form } from "react-bootstrap";

const DoctorFieldsComponent = () => {
  return (
    <>
      <Form.Control
        type="text"
        id="doctorId"
        className="fadeIn third"
        name="doctorId"
        placeholder="doctorId"
      />
      <Form.Control
        type="text"
        id="hospitalName"
        className="fadeIn fourth"
        name="hospitalName"
        placeholder="hospitalName"
      />
      <Form.Control
        type="text"
        id="specialty"
        className="fadeIn fourth"
        name="specialty"
        placeholder="specialty"
      />
    </>
  );
};

export default DoctorFieldsComponent;
