import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css";

export const DoctorFields = [
  {
    name: "doctorId",
    placeholder: "doctorId",
    classes: [style["fadeIn"], style["third"]].join(" "),
    fieldType: "text",
  },
  {
    name: "hospitalName",
    placeholder: "hospitalName",
    classes: [style["fadeIn"], style["fourth"]].join(" "),
    fieldType: "text",
  },
  {
    name: "specialty",
    placeholder: "specialty",
    classes: [style["fadeIn"], style["fourth"]].join(" "),
    fieldType: "text",
  },
];
