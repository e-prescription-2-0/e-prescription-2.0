import { Form } from "react-bootstrap";

const PharmacistFieldsComponent = () => {
  return (
    <>
      <Form.Control
        type="text"
        id="pharmacistId"
        className="fadeIn fourth"
        name="pharmacistId"
        placeholder="pharmacistId"
        required
      />
      <Form.Control
        type="text"
        id="pharmacyName"
        className="fadeIn fourth"
        name="pharmacyName"
        placeholder="pharmacyName"
        required
      />
    </>
  );
};

export default PharmacistFieldsComponent;
