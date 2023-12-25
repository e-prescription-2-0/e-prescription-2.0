import { useMediaQuery } from "react-responsive";
import DashboardNavigation from "./DashboardNavigation/DashboardNavigation";
import style from "./MainDashboard.module.css";
import Prescription from "./Prescription/Prescription";
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList";
import MobilePrescriptionsList from "./PrescriptionsList/MobilePrescriptionsList";
import { prescriptionsSlice } from "../../reducers/prescriptions";
import { useReduxAction } from "../../hooks/useReduxAction";
import { useCallback, useEffect, useState } from "react";
import LoadingPill from "../Loadings/LoadingPill/LoadingPill";
import EmptyPrescriptionsList from "./PrescriptionsList/EmptyPrescriptionsList";
import { prescriptionsData } from "../../mockData";

const MainDashboard = () => {
  const isDesktop = useMediaQuery({ minWidth: 1500 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const getPrescriptions = useReduxAction(
    prescriptionsSlice.actions.fetchMyPrescriptions
  );
  const prescriptions = prescriptionsData
  const [loading, setLoading] = useState(true);

  const prescriptionList = useCallback(() => {
    if(prescriptions.length === 0){
      return <EmptyPrescriptionsList/>
    }
    if (!isDesktop) {
      return <MobilePrescriptionsList prescriptions={prescriptions} />;
    } else {
      return <PrescriptionsList prescriptions={prescriptions} />;
    }
  },[prescriptions, isDesktop])

  useEffect(() => {
    if (loading) {
      getPrescriptions();
      console.log(prescriptions);
      setLoading(false);
    }
  }, [getPrescriptions, loading, prescriptions]);

  // TODO: Remove commented code
  // const getDoctors = useReduxAction(usersSlice.actions.fetchDoctors)

  // useEffect(() => {
  //   getDoctors()
  // }, [])
  return loading ? (
    <LoadingPill />
  ) : (
    <section className={style["main-dashboard-section"]}>
      <DashboardNavigation />
      <div className={style["main-dashboard-section-content"]}>
        {prescriptionList()}
        <Prescription />
      </div>
    </section>
  );
};

export default MainDashboard;
