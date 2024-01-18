import EmptyPrescriptionsList from "./EmptyPrescriptionsList";
import MobilePrescriptionsList from "./MobilePrescriptionsList";
import DesktopPrescriptionsList from "./DekstopPrescriptionList";
import { prescriptionsSlice } from "../../../reducers/prescriptions";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useMediaQuery } from "react-responsive";
import { useCallback, useEffect, useState } from "react";
import { useReduxState } from "../../../hooks/useReduxState";
import LoadingCircle from "../../Loadings/LoadingCircle/LoadingCircle";
import PrescriptionListHeader from "./PrescriptionListHeader";

const PrescriptionsList = ({}) => {
  const [loading, setLoading] = useState(true);

  const isDesktop = useMediaQuery({ minWidth: 1501 });

  const getPrescriptions = useReduxAction(
    prescriptionsSlice.actions.fetchMyPrescriptions
  );

  const prescriptions = useReduxState(
    (state) => state.prescriptions.allMyPrescriptions
  );

  const prescriptionList = useCallback(() => {
    if (prescriptions.length === 0) {
      return <EmptyPrescriptionsList />;
    }
    if (!isDesktop) {
      return <MobilePrescriptionsList prescriptions={prescriptions} />;
    } else {
      return <DesktopPrescriptionsList prescriptions={prescriptions} />;
    }
  }, [prescriptions, isDesktop]);

  useEffect(() => {
    if (loading) {
      getPrescriptions();
      setLoading(false);
    }
  }, [getPrescriptions, loading, prescriptions]);

  return loading ? <LoadingCircle /> : <div>{prescriptionList()}</div>;
};
export default PrescriptionsList;
