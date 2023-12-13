import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { ListGroup } from "react-bootstrap"
import style from "./PrescriptionsList.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PrescriptionCard = ({number, doctor, patient, date})=>{
    return(
        <li className={style["prescriptions-list-item"]}>
        <div className={style["prescriptions-list-item-content"]}>
          <p className={style["prescriptions-list-item-content-item"]}>
            <span>Rp №:</span> {number}
          </p>
          <p className={style["prescriptions-list-item-content-item"]}>
            <span>От:</span> {doctor}
          </p>
          <p className={style["prescriptions-list-item-content-item"]}>
            <span>За:</span> {patient}
          </p>
          <p className={style["prescriptions-list-item-content-item"]}>
            <span>Дата:</span> {date}
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </li>
    )
}
export default PrescriptionCard