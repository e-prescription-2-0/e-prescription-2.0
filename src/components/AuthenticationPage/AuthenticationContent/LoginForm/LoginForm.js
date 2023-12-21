import { useState } from "react";
import Form from "react-bootstrap/Form";
import style from "../../AuthenticationPage.module.css";
import { validateInputBaseOnRegex } from "../helpers/helperAuthenticationFunctions";
import { validationRegex } from "../helpers/validationRegex";
import FieldBuilder from "../helpers/FieldBuilder";
import { LoginFields } from "./LoginFields";

const LoginForm = ({ setForm }) => {
  const [validated, setValidated] = useState(false);
  const [invalidLoginForm, setInvalidLoginForm] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      setInvalidLoginForm(true);
      // event.stopPropagation();
      setValidated(true);
    } else {
      setInvalidLoginForm(false);
      setValidated(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });

    const regex = validationRegex[name].validation;
    const errorMessage = validationRegex[name].errorMessage;
    validateInputBaseOnRegex(event, regex, value, errorMessage);
  };

  return (
    <>
      <h3>Login</h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {invalidLoginForm && (
          <div className={style["error"]}>Invalid Email or password</div>
        )}
        {LoginFields.map((fieldData)=><FieldBuilder handleChange={handleChange} formData={loginFormData} fieldData={fieldData}/>)}
        

        <button
          type="submit"
          className={[
            style["fadeIn"],
            style["fourth"],
            style["popup-form-button"],
          ].join(" ")}
        >
          Log In
        </button>
      </Form>
      {/* <!-- Remind Password --> */}
      <div id={style["formFooter"]}>
        <p
          className={style["underlineHover"]}
          onClick={() => setForm("forgotPassword")}
        >
          Forgot Password?
        </p>
      </div>
    </>
  );
};

export default LoginForm;
