import style from "../../../../AuthenticationPage.module.css";

export const PatientFields = [
  {
    name: "patientId",
    placeholder: "Patient ID",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",
    
    autoComplete: "off",

    option: undefined,
  },
  {
    name: "gender",
    placeholder: "Gender",
    classes: [style["form-select"], style["fadeIn"], style["second"]].join(" "),
    fieldType: "select",
    autoComplete: "off",

    options: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
  },
  {
    name: "dateOfBirth",
    placeholder: "Date Of Birth",
    classes: [style["fadeIn"], style["second"]].join(" "),

    autoComplete: "off",

    fieldType: "date",
    option: undefined,
  },
];
