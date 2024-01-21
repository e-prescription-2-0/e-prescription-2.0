import { useReduxAction } from "../../../../hooks/useReduxAction";
import { useReduxState } from "../../../../hooks/useReduxState";
import { prescriptionsSlice } from "../../../../reducers/prescriptions";
import style from "../Prescription.module.css";

const PrescriptionFooter = () => {
  const completePrescription = useReduxAction(
    prescriptionsSlice.actions.completePrescription
  );
  const deletePrescription = useReduxAction(
    prescriptionsSlice.actions.deletePrescription
  );

  const currentPrescription = useReduxState(
    (state) => state.prescriptions.prescription
  );

  let user = {
    role: "pharmacist",
    id: "658f0b9d1a1925a19548cc8e",
  };

  const onCompleteBtnClick = () => {
    completePrescription(currentPrescription._id);
  };

  const onDeleteBtnClick = () => {
    let res = window.confirm(
      "Are you sure you want to delete this prescription?"
    );

    if (res) {
      deletePrescription(currentPrescription._id);
    }
  };

  const isOwner = () => {
    //when we have saved user in redux, take the user from there

    return user.id === currentPrescription.prescribedBy._id;
  };

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

      <div className={style["center-div"]}>
        {user.role === "pharmacist" && (
          <div className={style["center-div"]}>
            {currentPrescription.isCompleted ? (
              <i
                id={style["prescription-completed"]}
                className="fa-solid fa-check"
              ></i>
            ) : (
              <>
                <p>Изпълни рецепта?</p>
                <div>
                  <button
                    onClick={onCompleteBtnClick}
                    className={style["isCompleted-btn-yes"]}
                  >
                    Частично
                  </button>
                  <button
                    onClick={onCompleteBtnClick}
                    className={style["isCompleted-btn-yes"]}
                  >
                    Напълно
                  </button>
                </div>
              </>
            )}
          </div>
        )}
        {user.role === "doctor" && isOwner() && (
          <div className={style["center-div"]}>
            <button onClick={onDeleteBtnClick} className={style["delete-btn"]}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrescriptionFooter;
