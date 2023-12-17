import React from "react";
import { Form } from "react-bootstrap";
import style from "../../AuthenticationPage.module.css"
import { registrationValidationRegex } from "./registrationValidationRegex";

const RegisterField = ({ handleChange, registrationFormData, fieldData }) => {
  const field = () => {
    if (["text", "date", "password"].includes(fieldData.fieldType)) {
      return (
        <Form.Control
          type={fieldData.fieldType}
          key={fieldData.name}
          className={fieldData.classes}
          name={fieldData.name}
          placeholder={fieldData.placeholder}
          required
          value={registrationFormData[fieldData.name] || ""}
          onChange={handleChange}
        />

      );
    } else if (fieldData.fieldType === "select") {
      return (
        <select
          className={fieldData.classes}
          aria-label="Default select example"
          key={fieldData.name}
          name={fieldData.name}
          value={registrationFormData[fieldData.name] || ""}
          onChange={handleChange}
        >
          {fieldData.options.map((optionData) => (
            <option key={optionData.value} value={optionData.value}>
              {optionData.text}
            </option>
          ))}
        </select>
      );
    }
    return null; // Return null if fieldType is not recognized
  };

  return (
    <>
      <Form.Group className={style["input-group"]}>
        {field()}
        <Form.Control.Feedback
          type="invalid"
          className={style["register-form-error"]}
        >
            {fieldData.name in registrationValidationRegex? registrationValidationRegex[fieldData.name].errorMessage: ''}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default RegisterField;
