import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { ListGroup } from "react-bootstrap"
import style from "./PrescriptionsList.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PrescriptionCard = ({number, doctor, patient, date})=>{
    return(
        <li className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> {number}
          </p>
          <p>
            <span>От:</span> {doctor}
          </p>
          <p>
            <span>За:</span> {patient}
          </p>
          <p>
            <span>Дата:</span> {date}
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </li>
    )
}
export default PrescriptionCard