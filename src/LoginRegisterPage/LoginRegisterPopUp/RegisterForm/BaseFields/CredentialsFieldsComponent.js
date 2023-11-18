import PatientFieldsComponent from "../ProfileFields/PatientFieldsComponent";
import DoctorFieldsComponent from "../ProfileFields/DoctorFieldsComponent";
import PharmacistFieldsComponent from "../ProfileFields/PharmacistFieldsComponent";
import { useState } from "react";

const CredentialsFieldsComponent = () => {
  return (
    <>
      <input
        type="text"
        id="email"
        className="fadeIn first col"
        name="email"
        placeholder="Email"
      />
      <input
        type="text"
        id="password"
        className="fadeIn second col"
        name="password"
        placeholder="Password"
      />
      <input
        type="text"
        id="repeatPassword"
        className="fadeIn third col"
        name="repeatPassword"
        placeholder="Repeat Password"
      />
    </>
  );
};

export default CredentialsFieldsComponent;
