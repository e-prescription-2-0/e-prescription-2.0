import style from "../../../../AuthenticationPage.module.css";

export const NameFields = [
  {
    name: "firstName",
    placeholder: "firstName",
    classes: [style["fadeIn"], style["first"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
  {
    name: "lastName",
    placeholder: "lastName",
    classes: [style["fadeIn"], style["first"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
];
