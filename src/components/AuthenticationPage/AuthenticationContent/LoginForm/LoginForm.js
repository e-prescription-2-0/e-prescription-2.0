import { useState } from "react";
import Form from "react-bootstrap/Form";
import style from "../../AuthenticationPage.module.css";
import { InputGroup } from "react-bootstrap";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [invalidLoginForm, setInvalidLoginForm] = useState(false)

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
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />

          <Form.Control
            type="password"
            id="password"
            className={[style["fadeIn"], style["third"]].join(" ")}
            name="login"
            placeholder="Password"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
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
