import style from "./MainDashboard.module.css"
import Prescription from "./Prescription/Prescription"
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList"

const MainDashboard = () => {
  return (
    <div className={style["main-dashboard-section-content"]}>
      <PrescriptionsList />
      <Prescription />
    </div>
  )
}

export default MainDashboard
