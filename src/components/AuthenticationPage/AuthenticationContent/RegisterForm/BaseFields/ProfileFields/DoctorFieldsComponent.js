import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css"


const DoctorFieldsComponent = () => {
  return (
    <>
      <Form.Control
        type="text"
        id="doctorId"
        className={[style["fadeIn"], style["third"]].join(' ')}
        name="doctorId"
        placeholder="doctorId"
        required
      />
      <Form.Control
        type="text"
        id="hospitalName"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="hospitalName"
        placeholder="hospitalName"
        required
      />
      <Form.Control
        type="text"
        id="specialty"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="specialty"
        placeholder="specialty"
        required
      />
    </>
  );
};

export default DoctorFieldsComponent;
