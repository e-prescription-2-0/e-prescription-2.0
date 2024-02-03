import {
  faAngleDown,
  faAngleRight,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "react-responsive"
import { useReduxAction } from "../../../hooks/useReduxAction"
import { useReduxState } from "../../../hooks/useReduxState"
import { prescriptionsSlice } from "../../../reducers/prescriptions"
import style from "./PrescriptionsList.module.css"

const PrescriptionCard = ({ prescription }) => {
  const setOpenPrescription = useReduxAction(
    prescriptionsSlice.actions.setPrescription
  )
  const openPrescription = useReduxState(
    (state) => state.prescriptions.prescription
  )

  const getPrescription = useReduxAction(
    prescriptionsSlice.actions.fetchPrescription
  )

  const isDesktop = useMediaQuery({ minWidth: 1501 })

  const isOpen = openPrescription._id === prescription._id

  const iconDesktop = isOpen ? faAngleRight : faAngleDown
  const iconMobile = isOpen ? faAngleDown : faAngleUp
  const icon = isDesktop ? iconDesktop : iconMobile

  const onCLickSetThisPrescriptionToOpenPrescription = () => {
    getPrescription(prescription._id)
    setOpenPrescription(prescription)
  }

  const { prescriptionId, prescribedBy, prescribedTo, validPeriod } =
    prescription

  return (
    <li
      className={[
        style["prescriptions-list-item"],
        isOpen && style["prescriptions-list-item-open"],
      ].join(" ")}
      onClick={onCLickSetThisPrescriptionToOpenPrescription}
    >
      <div className={style["prescriptions-list-item-content"]}>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>Rp №:</span> {prescriptionId}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>От:</span>{" "}
          {`${prescribedBy["firstName"]} ${prescribedBy["lastName"]}`}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>За:</span>{" "}
          {`${prescribedTo.firstName} ${prescribedTo.lastName}`}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>Дата:</span> {validPeriod}
        </p>
      </div>

      <FontAwesomeIcon icon={icon} />
    </li>
  )
}
export default PrescriptionCard
