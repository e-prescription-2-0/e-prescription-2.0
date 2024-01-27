import { useReduxAction } from "../../../../hooks/useReduxAction";
import { prescriptionsSlice } from "../../../../reducers/prescriptions";
import style from "../Prescription.module.css";
import Accordion from "react-bootstrap/Accordion";

const MedicineAccordion = ({
  medicine,
  index,
  isPrescriptionComplete,
  medicals,
  setMedicals,
}) => {
  console.log(isPrescriptionComplete);

  const onClickMedicalCheckbox = (e) => {
    const isCheck = e.target.checked;
    console.log(e.target.checked);
    setMedicals({ ...medicals, [medicine._id]: isCheck });
  };
  console.log(medicine);
  return (
    <Accordion.Item
      eventKey={index}
      className={style["div-articles-accordion-item"]}
    >
      <Accordion.Header>
        <span className={style["div-articles-accordion-item-span"]}>Rp/</span>
        {isPrescriptionComplete ? (
          medicine.medicineName
        ) : (
          <div className={style["checkboxes__item"]}>
            <label className={[style["checkbox"], style["style-f"]].join(" ")}>
              {medicine.isCompleted ? (
                <input type="checkbox" disabled checked={true} />
              ) : (
                <input type="checkbox" onClick={onClickMedicalCheckbox} />
              )}
              <div className={style["checkbox__checkmark"]}></div>
              <div className={style["checkbox__body"]}>
                {" "}
                {medicine.medicineName}
              </div>
            </label>
          </div>
        )}
      </Accordion.Header>
      <Accordion.Body className={style["div-articles-accordion-item-content"]}>
        Начин на употреба? {medicine.signature}
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default MedicineAccordion;
