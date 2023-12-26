import style from "../Prescription.module.css";
import Accordion from "react-bootstrap/Accordion";

const MedicineAccordion = ({medicine, index})=>{
    return (
        <Accordion.Item
          eventKey={index}
          className={style["div-articles-accordion-item"]}
        >
          <Accordion.Header>
            <span className={style["div-articles-accordion-item-span"]}>
              Rp/
            </span>
            {medicine.article}
          </Accordion.Header>
          <Accordion.Body
            className={style["div-articles-accordion-item-content"]}
          >
            Колко пъти дневно? {medicine.quantity}
          </Accordion.Body>
          <Accordion.Body
            className={style["div-articles-accordion-item-content"]}
          >
            Начин на употреба? {medicine.methodOfUse}
          </Accordion.Body>
        </Accordion.Item>
      );
}
export default MedicineAccordion