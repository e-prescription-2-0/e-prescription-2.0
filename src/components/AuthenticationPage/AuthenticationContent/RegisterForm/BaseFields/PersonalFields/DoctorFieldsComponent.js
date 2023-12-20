import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css";

export const DoctorFields = [
  {
    name: "doctorId",
    placeholder: "Doctor ID",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",
  },
  {
    name: "hospitalName",
    placeholder: "Hospital Name",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",
  },
  {
    name: "specialty",
    placeholder: "Specialty",
    classes: [style["fadeIn"], style["second"]].join(" "),
    fieldType: "text",
  },
];
