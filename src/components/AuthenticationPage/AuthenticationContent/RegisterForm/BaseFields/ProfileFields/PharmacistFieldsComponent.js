import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css"


const PharmacistFieldsComponent = () => {
  return (
    <>
      <Form.Control
        type="text"
        id="pharmacistId"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="pharmacistId"
        placeholder="pharmacistId"
        required
      />
      <Form.Control
        type="text"
        id="pharmacyName"
        className={[style["fadeIn"], style["fourth"]].join(' ')}
        name="pharmacyName"
        placeholder="pharmacyName"
        required
      />
    </>
  );
};

export default PharmacistFieldsComponent;
