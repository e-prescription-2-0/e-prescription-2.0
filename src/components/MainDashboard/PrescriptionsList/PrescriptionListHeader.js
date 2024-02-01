import { useEffect, useState } from "react";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { prescriptionsSlice } from "../../../reducers/prescriptions";
import style from "./PrescriptionsList.module.css";
import { useReduxState } from "../../../hooks/useReduxState";

const PrescriptionListHeader = () => {
  const setPrescriptionsFilter = useReduxAction(
    prescriptionsSlice.actions.setPrescriptionsFilter
  );

  const prescriptionFilter = useReduxState(
    (state) => state.prescriptions.prescriptionsFilter
  );

  // const [prescriptionType, setPrescriptionType] = useState("altogether");

  const onBtnClick = (type) => {
    setPrescriptionsFilter(type);
  };

  let button;
  console.log(prescriptionFilter)
  switch (prescriptionFilter) {
    case "active":
      button = (
        <button
          className={style["active"]}
          onClick={() => {
            onBtnClick("completed");
          }}
        >
          Active
        </button>
      );
      break;
    case "completed":
      button = (
        <button
          className={style["completed"]}
          onClick={() => {
            onBtnClick("altogether");
          }}
        >
          Completed
        </button>
      );

      break;

    default:
      button = (
        <button
          className={style["altogether"]}
          onClick={() => {
            onBtnClick("active");
          }}
        >
          Altogether
        </button>
      );
    // code block
  }

  return (
    <div className={style["prescriptions-list-header-container"]}>
      <h5>Prescriptions</h5>
      {button}
    </div>
  );
};

export default PrescriptionListHeader;
