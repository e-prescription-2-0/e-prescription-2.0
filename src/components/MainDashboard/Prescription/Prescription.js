import style from "./Prescription.module.css";
import { useReduxState } from "../../../hooks/useReduxState";
import PrescriptionContent from "./PrescriptionContent/PrescriptionContent";
import NoPrescriptionContent from "./NoPrescriptionContent";

const Prescription = () => {
  const prescription = useReduxState(
    (state) => state.prescriptions.prescription
  );
  const isOpenPrescription = Object.keys(prescription).length > 0;

  return (
    <section className={style["section-open-prescription"]}>
      {isOpenPrescription ? <PrescriptionContent /> : <NoPrescriptionContent />}
    </section>
  );
};

export default Prescription;
