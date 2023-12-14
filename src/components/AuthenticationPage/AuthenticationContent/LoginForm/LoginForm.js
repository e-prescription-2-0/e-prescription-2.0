import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      // event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
    }
  };
  return (
    <>
      <h3>Login</h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="Email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />
        
        <Form.Control
          type="password"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="Password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        />
        <button type="submit" className="fadeIn fourth popup-form-button">Log In</button>
      </Form>
      {/* <!-- Remind Password --> */}
      <div id="formFooter">
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default LoginForm;
