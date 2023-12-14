import Form from "react-bootstrap/Form";

const CredentialsFieldsComponent = ({setProfile}) => {

  return (
    <>
      <Form.Control
        type="email"
        id="email"
        className="fadeIn first col"
        name="email"
        placeholder="Email"
        required 
      />
      <Form.Control
        type="password"
        id="password"
        className="fadeIn second col"
        name="password"
        placeholder="Password"
        required 
        hasValidation
      />
      <Form.Control
        type="password"
        id="repeatPassword"
        className="fadeIn third col"
        name="repeatPassword"
        placeholder="Repeat Password"
        required 
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
