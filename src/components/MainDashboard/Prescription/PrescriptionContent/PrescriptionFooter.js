import { useReduxAction } from "../../../../hooks/useReduxAction"
import { useReduxState } from "../../../../hooks/useReduxState"
import { prescriptionsSlice } from "../../../../reducers/prescriptions"
import style from "../Prescription.module.css"

const PrescriptionFooter = () => {
  const completePrescription = useReduxAction(
    prescriptionsSlice.actions.completePrescription
  )
  const deletePrescription = useReduxAction(
    prescriptionsSlice.actions.deletePrescription
  )
  const user = useReduxState((state) => state.auth.authUser)

  const currentPrescription = useReduxState(
    (state) => state.prescriptions.prescription
  )

  // let user = {
  //   role: "doctor",
  //   id: "658f0b9d1a1925a19548cc8e"
  // }

  const onCompleteBtnClick = () => {
    completePrescription(currentPrescription._id)
  }

  const onDeleteBtnClick = () => {
    let res = window.confirm(
      "Сигурни ли сте, че искате да изтриете тази рецепта?"
    )

    if (res) {
      deletePrescription(currentPrescription._id)
    }
  }

  const isOwner = () => {
    //when we have saved user in redux, take the user from there

    return user._id === currentPrescription.prescribedBy._id
  }

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
            <p>Изпълнена рецепта?</p>
            {currentPrescription.isCompleted ? (
              <svg
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#3c6e71",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#ffffff"
                color="#3c6e71"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              <button
                onClick={onCompleteBtnClick}
                className={style["isCompleted-btn-yes"]}
              >
                Изпълни
              </button>
            )}
          </div>
        )}
        {user.role === "doctor" && isOwner() && (
          <div className={style["center-div"]}>
            <button onClick={onDeleteBtnClick} className={style["delete-btn"]}>
              Изтрии
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PrescriptionFooter
