import { useEffect } from "react";
import Form from "react-bootstrap/Form";

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
        className="fadeIn first col"
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
        className="fadeIn second col"
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
        className="fadeIn third col"
        name="repeatPassword"
        placeholder="Repeat Password"
        required
        value={registrationFormData?.repeatPassword || ''}
        onChange={handleChange}
      />
      <select
        onChange={(e) => setProfile(e.target.value)}
        className="form-select fadeIn fourth"
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
