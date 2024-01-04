import { useState } from "react";
import style from "./PrescriptionsList.module.css";
const PrescriptionListHeader = () => {
  const [prescriptionType, setPrescriptionType] = useState("completed");
  return (
    <div className={style["prescriptions-list-header-container"]}>
      <h5>
        {prescriptionType === "active" ? "Active" : "Completed"} prescriptions
      </h5>
      {prescriptionType === "active" ? (
        <button
          className={style["completed"]}
          onClick={() => setPrescriptionType("completed")}
        >
          Completed
        </button>
      ) : (
        <button
          className={style["active"]}
          onClick={() => setPrescriptionType("active")}
        >
          Active
        </button>
      )}
    </div>
  );
};

export default PrescriptionListHeader;
