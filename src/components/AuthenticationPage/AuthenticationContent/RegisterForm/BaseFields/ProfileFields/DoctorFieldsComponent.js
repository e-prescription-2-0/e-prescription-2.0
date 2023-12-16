import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css"

export const DoctorFields = [
  {name: 'doctorId', classes: [style["fadeIn"], style["third"]].join(' '), fieldType: 'text'},
  {name: 'hospitalName', classes: [style["fadeIn"], style["fourth"]].join(' '), fieldType: 'text'},
  {name: 'specialty', classes: [style["fadeIn"], style["fourth"]].join(' '), fieldType: 'text'}

]

const DoctorFieldsComponent = ({handleChange, registrationFormData}) => {
  return (
    <>
      <Form.Control
        type="text"
        id="doctorId"
        className={[style["fadeIn"], style["third"]].join(' ')}
        name="doctorId"
        placeholder="doctorId"
        required
        value={registrationFormData?.doctorId || ""}
        onChange={handleChange}
      />
      <Form.Control
        type="text"
        id="hospitalName"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="hospitalName"
        placeholder="hospitalName"
        required
        value={registrationFormData?.hospitalName || ""}
        onChange={handleChange}
      />
      <Form.Control
        type="text"
        id="specialty"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="specialty"
        placeholder="specialty"
        required
        value={registrationFormData?.specialty || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default DoctorFieldsComponent;
