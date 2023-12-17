import style from "../../../AuthenticationPage.module.css";

export const CredentialsFields = [
  {
    name: "email",
    placeholder: "Email Address",
    classes: [style["fadeIn"], style["first"], style["col"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
  {
    name: "password",
    placeholder: "Password",
    classes: [style["fadeIn"], style["second"], style["col"]].join(" "),
    fieldType: "password",
    option: undefined,
  },
  {
    name: "repeatPassword",
    placeholder: "Confirm Password",
    classes: [style["fadeIn"], style["third"], style["col"]].join(" "),
    fieldType: "password",
    option: undefined,
  },
  {
    name: "profileType",
    placeholder: "profileType",
    classes: [style["fadeIn"], style["fourth"], style["form-select"]].join(" "),
    fieldType: "select",
    options: [
      { text: "Patient", value: "patient" },
      { text: "Pharmacist", value: "pharmacist" },
      { text: "Doctor", value: "doctor" },
    ],
  },
];
