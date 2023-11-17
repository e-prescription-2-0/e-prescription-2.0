import FormComponent from "./FormComponent";

const LoginPopUpComponent = () => {
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}
          <h2 className="active">Sign In</h2>
          <h2 className="inactive underlineHover">Sign Up</h2>

          {/* <!-- Icon --> */}

          <FormComponent />

          {/* <!-- Login Form --> */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="email"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopUpComponent;
