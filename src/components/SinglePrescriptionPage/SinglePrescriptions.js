import { useEffect } from "react";
import Prescription from "../MainDashboard/Prescription/Prescription";
import { useReduxAction } from "../../hooks/useReduxAction";
import { useReduxState } from "../../hooks/useReduxState";
import { prescriptionsSlice } from "../../reducers/prescriptions";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import LoadingCircle from "../Loadings/LoadingCircle/LoadingCircle";

const SinglePrescriptionsPage = () => {
  const { prescriptionId } = useParams();
  const loading = useReduxState((state) => state.prescriptions.loading);
  const prescription = useReduxState(
    (state) => state.prescriptions.prescription
  );
  const setLoading = useReduxAction(prescriptionsSlice.actions.setLoading);
  const fetchPrescriptionById = useReduxAction(
    prescriptionsSlice.actions.fetchPrescription
  );
  console.log(loading);

  useEffect(() => {
    if (prescription?._id !== prescriptionId) {
      setLoading(true);
    }
    if (loading === true) {
      fetchPrescriptionById(prescriptionId);
    }
  }, [fetchPrescriptionById, loading, prescriptionId]);
  return loading ? <LoadingCircle /> : <Prescription />;
};

export default SinglePrescriptionsPage;
