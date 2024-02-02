import style from "./Prescription.module.css"
import prescriptionImage from "./prescription.png"

const NoPrescriptionContent = () => {
  return (
    <div className={style["div-no-prescription-content"]}>
      <img src={prescriptionImage} alt={"prescriptionImage"} />
      <h3>Select a prescription!</h3>
    </div>
  )
}

export default NoPrescriptionContent
