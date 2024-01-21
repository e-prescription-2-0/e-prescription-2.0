import style from "../Prescription.module.css";
import Accordion from "react-bootstrap/Accordion";

const MedicineAccordion = ({ medicine, index }) => {
  return (
    <Accordion.Item
      eventKey={index}
      className={style["div-articles-accordion-item"]}
    >
      <Accordion.Header>
        <span className={style["div-articles-accordion-item-span"]}>Rp/</span>
        <div className={style["checkboxes__item"]}>
          <label className={[style["checkbox"], style["style-f"]].join(" ")}>
            <input type="checkbox" />
            <div className={style["checkbox__checkmark"]}></div>
            <div className={style["checkbox__body"]}>
              {" "}
              {medicine.medicineName}
            </div>
          </label>
        </div>
      </Accordion.Header>
      <Accordion.Body className={style["div-articles-accordion-item-content"]}>
        Начин на употреба? {medicine.signature}
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default MedicineAccordion;
