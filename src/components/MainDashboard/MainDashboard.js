import { useMediaQuery } from "react-responsive"
import DashboardNavigation from "./DashboardNavigation/DashboardNavigation"
import style from "./MainDashboard.module.css"
import Prescription from "./Prescription/Prescription"
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList"
import MobilePrescriptionsList from "./PrescriptionsList/MobilePrescriptionsList"
import { prescriptionsSlice } from "../../reducers/prescriptions"
import { useReduxAction } from "../../hooks/useReduxAction"
import { useEffect, useState } from "react"
import LoadingPill from "../Loadings/LoadingPill/LoadingPill"
import { useReduxState } from "../../hooks/useReduxState"
import UserProfile from "../UserProfile/UserProfile"

const MainDashboard = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const getPrescriptions = useReduxAction(prescriptionsSlice.actions.fetchMyPrescriptions)
  const prescriptions = useReduxState((state) => state.prescriptions.allMyPrescriptions)
  const [loading, setLoading] = useState(true);
  const currentVieww = useReduxState((state) => state.dashboard.activeLink)

  console.log(currentVieww);

  useEffect(() => {
    if (loading) {
      getPrescriptions()
      setLoading(false)
    }



  }, [getPrescriptions, loading, prescriptions]);

  // TODO: Remove commented code
  // const getDoctors = useReduxAction(usersSlice.actions.fetchDoctors)

  // useEffect(() => {
  //   getDoctors()
  // }, [])
  return loading ? <LoadingPill /> : (
    <section className={style["main-dashboard-section"]}>
      <DashboardNavigation />
      <div className={style["main-dashboard-section-content"]}>
        {
          currentVieww === "Профил" ? <UserProfile /> : <>
            {isDesktop && <PrescriptionsList prescriptions={prescriptions} />}
            {isMobile && <MobilePrescriptionsList prescriptions={prescriptions} />}
            <Prescription />
          </>
        }

      </div>
    </section>
  )
}

export default MainDashboard
