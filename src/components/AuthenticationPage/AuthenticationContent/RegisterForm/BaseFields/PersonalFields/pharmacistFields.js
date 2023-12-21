import style from "../../../../AuthenticationPage.module.css";

export const pharmacistFields = [
  {
    name: "pharmacistId",
    placeholder: "Pharmacist ID",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",

    autoComplete: "off",

    option: undefined,
  },
  {
    name: "pharmacyName",
    placeholder: "Pharmacy Name",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",

    autoComplete: "off",

    option: undefined,
  },
];
