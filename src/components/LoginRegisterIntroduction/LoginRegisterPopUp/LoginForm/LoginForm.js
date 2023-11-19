import LogoScroll from "./LogoScroll";

const LoginForm = () => {
  return (
    <>
      {/* <!-- Icon --> */}

      <LogoScroll />
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
