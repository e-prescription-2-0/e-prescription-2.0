import { Form } from "react-bootstrap";
import style from "../../../../AuthenticationPage.module.css"


export const PharmacistFields = [
  {name: 'pharmacistId',placeholder:'pharmacistId', classes: [style["fadeIn"], style["fourth"]].join(' '), fieldType: 'text', option: undefined},
  {name: 'pharmacyName',placeholder:'pharmacyName', classes: [style["fadeIn"], style["fourth"]].join(" "), fieldType: 'text', option: undefined},
]
