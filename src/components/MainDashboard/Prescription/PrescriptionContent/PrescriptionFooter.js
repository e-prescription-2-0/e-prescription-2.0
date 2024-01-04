import { useReduxState } from "../../../../hooks/useReduxState";
import style from "../Prescription.module.css";

const PrescriptionFooter = () => {
  const currentPrescription = useReduxState(
    (state) => state.prescriptions.openPrescription
  );
  return (
    <div className={style["div-userInfo"]}>
      <p>
        Пациент: {currentPrescription.prescribedTo.firstName}{" "}
        {currentPrescription.prescribedTo.secondName}{" "}
        {currentPrescription.prescribedTo.lastName}
      </p>
      <p>Възраст: {currentPrescription.prescribedTo.age}</p>
      <p>Специфики: {currentPrescription.prescribedTo.specifics}</p>
    </div>
  );
};

export default PrescriptionFooter;
