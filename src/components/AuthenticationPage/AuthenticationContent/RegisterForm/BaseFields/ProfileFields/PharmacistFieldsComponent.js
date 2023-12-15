import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css"


const PharmacistFieldsComponent = ({handleChange, registrationFormData}) => {
  return (
    <>
      <Form.Control
        type="text"
        id="pharmacistId"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="pharmacistId"
        placeholder="pharmacistId"
        required
        value={registrationFormData?.pharmacistId || ""}
        onChange={handleChange}
      />
      <Form.Control
        type="text"
        id="pharmacyName"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="pharmacyName"
        placeholder="pharmacyName"
        required
        value={registrationFormData?.pharmacyName || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default PharmacistFieldsComponent;
