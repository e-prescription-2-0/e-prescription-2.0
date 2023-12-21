import style from "../../../../AuthenticationPage.module.css";

export const credentialsFields = [
  {
    name: "email",
    placeholder: "Email Address",
    classes: [style["fadeIn"], style["first"], style["col"]].join(" "),
   
    autoComplete: "email",
   
    fieldType: "text",
    option: undefined,
  },
  {
    name: "password",
    placeholder: "Password",
    classes: [style["fadeIn"], style["second"], style["col"]].join(" "),

    autoComplete: "new-password",

    fieldType: "password",
    option: undefined,
  },
  {
    name: "repeatPassword",
    placeholder: "Confirm Password",
    classes: [style["fadeIn"], style["third"], style["col"]].join(" "),
    
    autoComplete: "new-password",
    
    fieldType: "password",
    option: undefined,
  },
  {
    name: "profileType",
    placeholder: "profileType",
    classes: [style["fadeIn"], style["fourth"], style["form-select"]].join(" "),
   
    autoComplete: "off",
   
    fieldType: "select",
    options: [
      { text: "Patient", value: "patient" },
      { text: "Pharmacist", value: "pharmacist" },
      { text: "Doctor", value: "doctor" },
    ],
  },
];
