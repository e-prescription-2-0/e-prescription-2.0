import { useReduxAction } from "../../../../hooks/useReduxAction";
import { useReduxState } from "../../../../hooks/useReduxState";
import { prescriptionsSlice } from "../../../../reducers/prescriptions";
import style from "../Prescription.module.css";


const PrescriptionFooter = () => {
  const completePrescription = useReduxAction(prescriptionsSlice.actions.completePrescription)
  const currentPrescription = useReduxState(
    (state) => state.prescriptions.prescription
  );

  let user = {
    role: "pharmacist"
  }

  const onCompleteBtnSubmit = () => {
    completePrescription(currentPrescription._id)
  }

  let isCompleted = false

  return (
    <div className={style["div-userInfo"]}>
      <div>
        <p>
          Пациент: {currentPrescription.prescribedTo.firstName}{" "}
          {currentPrescription.prescribedTo.secondName}{" "}
          {currentPrescription.prescribedTo.lastName}
        </p>
        <p>Възраст: {currentPrescription.prescribedTo.age}</p>
        <p>Специфики: {currentPrescription.prescribedTo.specifics}</p>
        <p>Пол: {currentPrescription.prescribedTo.gender}</p>
      </div>
      {
        user.role === "pharmacist" &&
        <div className={style["prescription-status"]}>
          <p>Изпълнена рецепта?</p>
          {
            currentPrescription.isCompleted ? <i id={style["prescription-completed"]} class="fa-solid fa-check"></i> : <button onClick={onCompleteBtnSubmit} className={style["isCompleted-btn-yes"]}>Изпълни</button>
          }
          
        </div>
      }

    </div>
  );
};

export default PrescriptionFooter;
