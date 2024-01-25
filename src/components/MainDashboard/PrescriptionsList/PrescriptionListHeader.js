import { useEffect, useState } from "react";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { prescriptionsSlice } from "../../../reducers/prescriptions";
import style from "./PrescriptionsList.module.css";

const PrescriptionListHeader = () => {
  const completedPrescription = useReduxAction(prescriptionsSlice.actions.fetchCompletedPrescription);
  const activePrescription = useReduxAction(prescriptionsSlice.actions.fetchActivePrescription);

  const [prescriptionType, setPrescriptionType] = useState("completed");

  const onCompletedBtnClick = () => {
    setPrescriptionType("completed")
    activePrescription()
  }
  const onActiveBtnClick = () => {
    setPrescriptionType("active")
    completedPrescription()
  }
  return (
    <div className={style["prescriptions-list-header-container"]}>
      <h5>
        {prescriptionType === "active" ? "Active" : "Completed"} prescriptions
      </h5>
      {prescriptionType === "active" ? (
        <button
          className={style["completed"]}
          onClick={onCompletedBtnClick}
        >
          Completed
        </button>
      ) : (
        <button
          className={style["active"]}
          onClick={onActiveBtnClick}
        >
          Active
        </button>
      )}
    </div>
  );
};

export default PrescriptionListHeader;
