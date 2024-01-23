import React, { useState } from "react";
import { Form } from "react-bootstrap";
import style from "../../AuthenticationPage.module.css";
import { validationRegex } from "./validationRegex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FieldBuilder = ({ handleChange, formData, fieldData }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const {
    fieldType,
    name,
    classes,
    placeholder,
    autoComplete,
    options,
  } = fieldData;

  // Determine the actual field type, considering password visibility
  const fieldTypeChoice =
    fieldData.fieldType === "password"
      ? visiblePassword
        ? "text"
        : "password"
      : fieldData.fieldType;

  // Build the appropriate form field based on the field type
  const buildField = () => {
    if (["text", "date", "password"].includes(fieldType)) {
      return (
        <Form.Control
          type={fieldTypeChoice}
          id={name}
          className={classes.map((className) => style[className]).join(" ")}
          name={name}
          placeholder={placeholder}
          required
          autoComplete={autoComplete}
          value={formData[name] || ""}
          onChange={handleChange}
        />
      );
    } else if (fieldType === "select") {
      return (
        <select
          className={classes.map((className) => style[className]).join(" ")}
          aria-label="Default select example"
          name={name}
          value={formData[name] || ""}
          onChange={handleChange}
        >
          {options.map((optionData) => (
            <option key={optionData.value} value={optionData.value}>
              {optionData.text}
            </option>
          ))}
        </select>
      );
    }
    return null; // Return null if fieldType is not recognized
  };

  // Render the form field along with feedback and password visibility icon
  return (
    <Form.Group key={name} className={style["input-group"]}>
      {buildField()}
      {name in validationRegex && (
        <Form.Control.Feedback
          type="invalid"
          className={style["register-form-error"]}
        >
          {validationRegex[name].errorMessage}
        </Form.Control.Feedback>
      )}

      {fieldData.fieldType === "password" && (
        <FontAwesomeIcon
          className={[
            style["password-field-eye-icon"],
            style["fadeIn"],
            style["fourth"],
            visiblePassword ? style["password-field-eye-icon-slash"] : "",
          ].join(" ")}
          onClick={() => {
            setVisiblePassword(!visiblePassword);
          }}
          icon={visiblePassword ? faEyeSlash : faEye}
        />
      )}
    </Form.Group>
  );
};

export default FieldBuilder;
