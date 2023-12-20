import style from "../../../../AuthenticationPage.module.css";

export const NameFields = [
  {
    name: "firstName",
    placeholder: "First Name",
    classes: [style["fadeIn"], style["first"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    classes: [style["fadeIn"], style["first"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
];
