import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css";

export const PharmacistFields = [
  {
    name: "pharmacistId",
    placeholder: "Pharmacist ID",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
  {
    name: "pharmacyName",
    placeholder: "Pharmacy Name",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",
    option: undefined,
  },
];
