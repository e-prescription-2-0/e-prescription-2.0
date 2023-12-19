import DashboardNavigation from "./DashboardNavigation/DashboardNavigation"
import style from "./MainDashboard.module.css"
import Prescription from "./Prescription/Prescription"
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList"

const MainDashboard = () => {
  return (
    <section className={style["main-dashboard-section"]}>
      <DashboardNavigation />
      <div className={style["main-dashboard-section-content"]}>
        <PrescriptionsList />
        <Prescription />
      </div>
    </section>
  )
}

export default MainDashboard
