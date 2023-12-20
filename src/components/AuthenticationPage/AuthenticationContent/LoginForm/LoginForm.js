import { useState } from "react";
import Form from "react-bootstrap/Form";
import style from "../../AuthenticationPage.module.css";
import { InputGroup } from "react-bootstrap";
import { validateInputBaseOnRegex} from "../helperAuthenticationFunctions";
import { validationRegex } from "../validationRegex";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [invalidLoginForm, setInvalidLoginForm] = useState(false)
  const [loginFormData, setLoginFormData] = useState({email: '', password: ''})

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      setInvalidLoginForm(true)
      // event.stopPropagation();
      setValidated(true);
    } else {
      setInvalidLoginForm(false)
      setValidated(false);
    }
  };

  const handleChange = (event)=>{
    const {name, value} = event.target
    setLoginFormData({
      ...loginFormData,
      [name]: value
    })

    const regex = validationRegex[name].validation;
    const errorMessage = validationRegex[name].errorMessage
    validateInputBaseOnRegex(event, regex, value, errorMessage)

  }

  return (
    <>
      <h3>Login</h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {invalidLoginForm && <div className={style['error']}>Invalid Email or password</div>}
          <Form.Control
            type="text"
            id="login"
            className={[style["fadeIn"], style["second"]].join(" ")}
            name="login"
            placeholder="Email"
            required
          />


          <Form.Control
            type="password"
            id="password"
            className={[style["fadeIn"], style["third"]].join(" ")}
            name="login"
            placeholder="Password"
            required
          />
        

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
        <a className={style["underlineHover"]} href="#">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default LoginForm;
