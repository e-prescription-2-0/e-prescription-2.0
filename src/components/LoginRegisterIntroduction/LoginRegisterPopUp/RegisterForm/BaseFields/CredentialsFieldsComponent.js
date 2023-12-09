import Form from "react-bootstrap/Form";

const CredentialsFieldsComponent = ({setProfile}) => {

  return (
    <>
      <Form.Control
        type="text"
        id="email"
        className="fadeIn first col"
        name="email"
        placeholder="Email"
      />
      <Form.Control
        type="text"
        id="password"
        className="fadeIn second col"
        name="password"
        placeholder="Password"
      />
      <Form.Control
        type="text"
        id="repeatPassword"
        className="fadeIn third col"
        name="repeatPassword"
        placeholder="Repeat Password"
      />
      <select
        onChange={(e) => setProfile(e.target.value)}
        class="form-select fadeIn fourth"
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
