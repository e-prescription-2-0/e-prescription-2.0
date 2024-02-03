import PrescriptionCard from "./PrescriptionCard"
import PrescriptionListHeader from "./PrescriptionListHeader"
import style from "./PrescriptionsList.module.css"

const DesktopPrescriptionsList = ({ prescriptions }) => {
  return (
    <div className={style["prescriptions-list-wrapper"]}>
      <PrescriptionListHeader />
      <ul className={style["prescriptions-list-ul"]}>
        {prescriptions.map((data) => {
          return <PrescriptionCard key={data._id} prescription={data} />
        })}
      </ul>
    </div>
  )
}
export default DesktopPrescriptionsList
