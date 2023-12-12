import DashboardNavigation from "./DashboardNavigation/DashboardNavigation"
import style from "./MainDashboard.module.css"
import Prescription from "./Prescription/Prescription"
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList"

const MainDashboard = () => {
  return (
    <section className={style["main-dashboard-section"]}>
      <DashboardNavigation />
      <PrescriptionsList />
      <Prescription />
    </section>
  )
}

export default MainDashboard
