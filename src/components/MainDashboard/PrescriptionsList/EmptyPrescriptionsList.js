import style from "./PrescriptionsList.module.css"
import prescriptionListImage from "./medical-file.png"

const EmptyPrescriptionsList = () => {
  return (
    <div className={style["div-prescription-list-no-content"]}>
      <img src={prescriptionListImage} alt={"prescriptionListImage"} />
      <h3>Empty Rx List!</h3>
    </div>
  )
}

export default EmptyPrescriptionsList
