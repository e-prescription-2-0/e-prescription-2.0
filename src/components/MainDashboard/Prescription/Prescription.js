import { useReduxState } from "../../../hooks/useReduxState"
import NoPrescriptionContent from "./NoPrescriptionContent"
import style from "./Prescription.module.css"
import PrescriptionContent from "./PrescriptionContent/PrescriptionContent"

const Prescription = () => {
  const prescription = useReduxState(
    (state) => state.prescriptions.prescription
  )
  const isOpenPrescription = Object.keys(prescription).length > 0

  return (
    <div className={style["section-open-prescription"]}>
      {isOpenPrescription ? <PrescriptionContent /> : <NoPrescriptionContent />}
    </div>
  )
}

export default Prescription
