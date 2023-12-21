import style from "../../../../AuthenticationPage.module.css";

export const nameFields = [
  {
    name: "firstName",
    placeholder: "First Name",
    classes: [style["fadeIn"], style["first"]].join(" "),
    
    autoComplete: "given-name",

    fieldType: "text",
    option: undefined,
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    classes: [style["fadeIn"], style["first"]].join(" "),
    
    autoComplete: "family-name",

    fieldType: "text",
    option: undefined,
  },
];
