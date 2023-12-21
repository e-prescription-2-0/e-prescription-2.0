import style from "../../../../AuthenticationPage.module.css";

export const doctorFields = [
  {
    name: "doctorId",
    placeholder: "Doctor ID",
    classes: [style["fadeIn"], style["second"]].join(" "),
    autoComplete: "off",
    fieldType: "text",
    
  },
  {
    name: "hospitalName",
    placeholder: "Hospital Name",
    classes: [style["fadeIn"], style["second"]].join(" "),
    autoComplete: "off",

    fieldType: "text",
  },
  {
    name: "specialty",
    placeholder: "Specialty",
    classes: [style["fadeIn"], style["second"]].join(" "),
    autoComplete: "off",
    fieldType: "text",
  },
];
