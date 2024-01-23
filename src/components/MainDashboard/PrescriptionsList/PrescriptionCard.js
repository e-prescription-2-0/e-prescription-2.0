import { faAngleDown, faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import style from "./PrescriptionsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prescriptionsSlice } from "../../../reducers/prescriptions";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useReduxState } from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";

const PrescriptionCard = ({ prescription }) => {
  const setOpenPrescription = useReduxAction(prescriptionsSlice.actions.setOpenPrescription)
  const openPrescription = useReduxState((state)=>state.prescriptions.openPrescription)


  const isDesktop = useMediaQuery({ minWidth: 1501 });

  const isOpen = openPrescription._id === prescription._id

  const iconDesktop = isOpen ? faAngleRight : faAngleDown
  const iconMobile = isOpen ? faAngleDown : faAngleUp
  const icon = isDesktop? iconDesktop : iconMobile


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
          <span>От:</span> {`${prescribedBy["name"]} ${prescribedBy["lastName"]}`}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>За:</span> {`${prescribedTo.firstName} ${prescribedTo.lastName}`}
        </p>
        <p className={style["prescriptions-list-item-content-item"]}>
          <span>Дата:</span> {validPeriod}
        </p>
      </div>

      <FontAwesomeIcon icon={icon} />
    </li>
  );
};
export default PrescriptionCard;
