import { Button, Form } from "react-bootstrap";
import style from "../../AuthenticationPage.module.css";
import FieldBuilder from "../helpers/FieldBuilder";
import { useState } from "react";
import GetEmailAddress from "./ForgotPasswordSteps/GetEmailAddress";

const ForgotPasswordForm = () => {
  const [changeForgotPasswordFormData, setForgotPasswordFormData] = useState(
    {}
  );

  const handleEmailChange = (e) => {
    const { name, value } = e.target.value;

    setForgotPasswordFormData({
      ...changeForgotPasswordFormData,
      [name]: value,
    });
  };



  return (
    <>
      <Form className={style["form-forgot-password"]}>
        <GetEmailAddress handleEmailChange={handleEmailChange} setForgotPasswordFormData={setForgotPasswordFormData}/>

      </Form>
    </>
  );
};

export default ForgotPasswordForm;
