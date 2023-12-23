import { useMediaQuery } from "react-responsive"
import DashboardNavigation from "./DashboardNavigation/DashboardNavigation"
import style from "./MainDashboard.module.css"
import Prescription from "./Prescription/Prescription"
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList"
import MobilePrescriptionsList from "./PrescriptionsList/MobilePrescriptionsList"

const MainDashboard = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // TODO: Remove commented code
  // const getDoctors = useReduxAction(usersSlice.actions.fetchDoctors)

  // useEffect(() => {
  //   getDoctors()
  // }, [])
  return (
    <section className={style["main-dashboard-section"]}>
      <DashboardNavigation />
      <div className={style["main-dashboard-section-content"]}>
        {isDesktop && <PrescriptionsList/>}
        {isMobile && <MobilePrescriptionsList/>}
        <Prescription />
      </div>
    </section>
  )
}

export default MainDashboard
