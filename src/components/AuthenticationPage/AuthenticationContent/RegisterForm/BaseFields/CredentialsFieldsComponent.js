import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import style from "../../../AuthenticationPage.module.css"

const CredentialsFieldsComponent = ({
  setProfile,
  registrationFormData,
  handleChange,
}) => {
 


  return (
    <>
      <Form.Control
        type="email"
        id="email"
        className={[style["fadeIn"], style["first"], style["col"]].join(' ')}
        name="email"
        placeholder="Email"
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        value={registrationFormData?.email || ''}
        onChange={handleChange}
      />
      <Form.Control
        type="password"
        id="password"
        className={[style["fadeIn"], style["second"], style["col"]].join(' ')}
        name="password"
        placeholder="Password"
        required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        value={registrationFormData?.password || ''}
        onChange={handleChange}
      />
      <Form.Control
        type="password"
        id="repeatPassword"
        className={[style["fadeIn"], style["third"], style["col"]].join(' ')}
        name="repeatPassword"
        placeholder="Repeat Password"
        required
        value={registrationFormData?.repeatPassword || ''}
        onChange={handleChange}
      />
      <select
        onChange={(e) => setProfile(e.target.value)}
        className={[style["fadeIn"], style["fourth"], style["form-select"]].join(' ')}
        aria-label="Default select example  "
      >
        <option value="patient">Patient</option>
        <option value="pharmacist">Pharmacist</option>
        <option value="doctor">Doctor</option>
      </select>
    </>
  );
};

export default CredentialsFieldsComponent;
