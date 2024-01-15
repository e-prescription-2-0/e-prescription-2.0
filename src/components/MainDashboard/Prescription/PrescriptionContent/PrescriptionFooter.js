import { useReduxState } from "../../../../hooks/useReduxState";
import style from "../Prescription.module.css";

const PrescriptionFooter = () => {
  const currentPrescription = useReduxState(
    (state) => state.prescriptions.openPrescription
  );

  let user = {
    role: "pharmacist"
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
            currentPrescription.isCompleted ? <i id={style["prescription-completed"]} class="fa-solid fa-check"></i> : <button className={style["isCompleted-btn-yes"]}>Изпълни</button>
          }
          
        </div>
      }

    </div>
  );
};

export default PrescriptionFooter;
