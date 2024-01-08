import { useState } from "react";
import Form from "react-bootstrap/Form";
import style from "../../AuthenticationPage.module.css";
import FieldBuilder from "../helpers/FieldBuilder";
import { LoginFields } from "./LoginFields";
import { fetchLoginUser } from "../../../../reducers/auth";
import { useReduxAction } from "../../../../hooks/useReduxAction";
import { useNavigate } from "react-router-dom";



const LoginForm = ({ setForm }) => {
  const [validated, setValidated] = useState(false);
  const [invalidLoginForm, setInvalidLoginForm] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const dispatchSetAuthUser = useReduxAction(fetchLoginUser);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    const {loginEmail, loginPassword} = loginFormData
  
    setInvalidLoginForm(!invalidLoginForm);
    dispatchSetAuthUser({loginEmail, loginPassword})
    navigate('/')
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <>
      <h3 className={[style["fadeIn"], style["first"]].join(" ")}>Login</h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {invalidLoginForm && (
          <div className={style["error"]}>Invalid Email or password</div>
        )}
        {LoginFields.map((fieldData) => (
          <FieldBuilder
            handleChange={handleChange}
            formData={loginFormData}
            fieldData={fieldData}
          />
        ))}

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
