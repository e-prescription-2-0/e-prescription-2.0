import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";
import style from "./PrescriptionsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrescriptionCard = ({ prescription }) => {
  const openPrescription = () => {};
  const { _id, prescribedBy, prescribedTo, validPeriod } = prescription
  return (
    <li className={style["prescriptions-list-item"]}>
      <div className={style["prescriptions-list-item-content"]}>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>Rp №:</span> {_id}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>От:</span> {[prescribedBy]}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>За:</span> {prescribedTo}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>Дата:</span> {validPeriod}
        </p>
      </div>

      <FontAwesomeIcon icon={faAngleRight} />
    </li>
  );
};
export default PrescriptionCard;
