import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <>
      <h3>Login</h3>

      <Form>
        <Form.Control
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="Email"
        />
        <Form.Control
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="Password"
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
