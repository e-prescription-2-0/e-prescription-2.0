import { useReduxState } from "../../../../hooks/useReduxState";
import style from "../Prescription.module.css";

const PrescriptionHeader = () => {
  const currentPrescription = useReduxState(
    (state) => state.prescriptions.openPrescription
  );
  return (
    <div className={style["div-header"]}>
      <h2 className={style["div-header-main-title"]}>Рецептурна Бланка</h2>
      <h3 className={style["div-header-title"]}>
        Министерство на здравеопазването
      </h3>
      <p>
        Д-р: {currentPrescription.prescribedBy.name}{" "}
        {currentPrescription.prescribedBy.lastName}
      </p>
      <p>УИН: {currentPrescription.prescribedBy.doctorId}</p>
      <p>
        &#8470; Лек. Практика: {currentPrescription.prescribedBy.hospitalName}
      </p>
      <p>Имейл: {currentPrescription.prescribedBy.email}</p>
    </div>
  );
};

export default PrescriptionHeader