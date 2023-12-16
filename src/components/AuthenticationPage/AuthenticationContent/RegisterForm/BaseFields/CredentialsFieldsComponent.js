import Form from "react-bootstrap/Form";
import style from "../../../AuthenticationPage.module.css";
import { registrationValidationRegex } from "../registrationValidationRegex";

const CredentialsFieldsComponent = ({
  profileType,
  setProfileType,
  registrationFormData,
  handleChange,
}) => {
  return (
    <>
      <Form.Group className={style["input-group"]}>
        <Form.Control
          type="email"
          id="email"
          className={[style["fadeIn"], style["first"], style["col"]].join(" ")}
          name="email"
          placeholder="Email Address"
          required
          value={registrationFormData?.email || ""}
          onChange={handleChange}
        />
        <Form.Control.Feedback
          type="invalid"
          className={style["register-form-error"]}
        >
          {registrationValidationRegex.email.errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className={style["input-group"]}>
        <Form.Control
          type="password"
          id="password"
          className={[style["fadeIn"], style["second"], style["col"]].join(" ")}
          name="password"
          placeholder="Password"
          required
          value={registrationFormData?.password || ""}
          onChange={handleChange}
        />
        <Form.Control.Feedback
          type="invalid"
          className={style["register-form-error"]}
        >
          {registrationValidationRegex.password.errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className={style["input-group"]}>
        <Form.Control
          type="password"
          id="repeatPassword"
          className={[style["fadeIn"], style["third"], style["col"]].join(" ")}
          name="repeatPassword"
          placeholder="Confirm Password"
          required
          value={registrationFormData?.repeatPassword || ""}
          onChange={handleChange}
        />
        <Form.Control.Feedback
          type="invalid"
          className={style["register-form-error"]}
        >
          {"Password and Confirm Password should be equal"}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className={style["input-group"]}>
        <select
          onChange={(e) => setProfileType(e.target.value)}
          value={profileType}
          className={[
            style["fadeIn"],
            style["fourth"],
            style["form-select"],
          ].join(" ")}
          aria-label="Default select example  "
        >
          <option value="patient">Patient</option>
          <option value="pharmacist">Pharmacist</option>
          <option value="doctor">Doctor</option>
        </select>
      </Form.Group>
    </>
  );
};

export default CredentialsFieldsComponent;
