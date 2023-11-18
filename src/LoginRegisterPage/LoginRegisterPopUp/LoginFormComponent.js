import LogoFormComponent from "./LogoFormPopUpComponent";

const LoginFormComponent = () => {
  return (
    <>
      {/* <!-- Icon --> */}

      <LogoFormComponent />
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
    </>
  );
};

export default LoginFormComponent;
