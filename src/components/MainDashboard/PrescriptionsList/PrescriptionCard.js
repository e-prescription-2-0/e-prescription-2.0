import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import style from "./PrescriptionsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prescriptionsSlice } from "../../../reducers/prescriptions";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useReduxState } from "../../../hooks/useReduxState";

const PrescriptionCard = ({ prescription }) => {
  const setOpenPrescription = useReduxAction(prescriptionsSlice.actions.setOpenPrescription)
  const openPrescription = useReduxState((state)=>state.prescriptions.openPrescription)

  const isOpen = openPrescription._id === prescription._id


  const onCLickSetThisPrescriptionToOpenPrescription = () => {
    setOpenPrescription(prescription)
    console.log(openPrescription)
  };

  const { _id, prescribedBy, prescribedTo, validPeriod } = prescription
  return (
    <li className={[style["prescriptions-list-item"], isOpen && style['prescriptions-list-item-open']].join(" ")} onClick={onCLickSetThisPrescriptionToOpenPrescription}>
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
