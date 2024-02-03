import {
  faCirclePlus,
  faUserCheck,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "react-bootstrap/Button"
import Moment from "react-moment"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useReduxAction } from "../../../hooks/useReduxAction"
import { usersSlice } from "../../../reducers/users"
import styles from "./PatientsTable.module.css"

const PatientData = ({
  _id,
  firstName,
  lastName,
  patientId,
  dateOfBirth,
  email,
  specialty,
  hospitalName,
  prescriptionId,
  issuedOn,
  isCompleted,
  hidePatientList,
  searchType,
  isPrescriptionCreateMode,
  isMyPatientsChecked,
}) => {
  const { _id: doctorId, patients } = useSelector(
    (state) => state.auth.authUser
  )
  const navigate = useNavigate()
  const dispatchSetPatientToList = useReduxAction(
    usersSlice.actions.fetchSetToPatientList
  )
  const dispatchRemoveFromPatientList = useReduxAction(
    usersSlice.actions.fetchRemoveFromPatientList
  )

  const patientCheck = (id) => {
    return patients.some((e) => e === id)
  }

  const addCurrentPatientToMyList = (e, patientId) => {
    e.stopPropagation()

    dispatchSetPatientToList({ doctorId, patientId })
  }
  const removeCurrentFromMyPatientList = (e, patientId) => {
    e.stopPropagation()

    dispatchRemoveFromPatientList({ doctorId, patientId })
  }

  const patientView = !isMyPatientsChecked ? (
    <FontAwesomeIcon
      icon={faUserCheck}
      style={{ color: "#3c6e71" }}
      size="lg"
    />
  ) : (
    <FontAwesomeIcon
      icon={faUserSlash}
      style={{ color: "#dc3545" }}
      size="lg"
      onClick={(e) => removeCurrentFromMyPatientList(e, _id)}
    />
  )

  return (
    <tr
      className={styles["table-row"]}
      onClick={() =>
        navigate(
          `/${
            searchType !== "prescriptions" ? "profile" : "prescriptions"
          }/${_id}`
        )
      }
    >
      {searchType !== "prescriptions" ? (
        <>
          <td>{firstName}</td>
          <td>{lastName}</td>
          {searchType === "patients" && (
            <>
              <td>{patientId}</td>
              <td>
                {!patientCheck(_id) ? (
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    style={{ color: "#3c6e71" }}
                    size="lg"
                    onClick={(e) => addCurrentPatientToMyList(e, _id)}
                  />
                ) : (
                  patientView
                )}
              </td>
              {isPrescriptionCreateMode && patientCheck(_id) ? (
                <td>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      hidePatientList({
                        _id,
                        firstName,
                        lastName,
                        patientId,
                        dateOfBirth,
                      })
                    }}
                  >
                    Изпиши
                  </Button>{" "}
                </td>
              ) : (
                <td></td>
              )}
            </>
          )}
          {searchType === "doctors" && (
            <>
              <td>{email}</td>
              <td>{specialty}</td>
              <td>{hospitalName}</td>
            </>
          )}
        </>
      ) : (
        <>
          <td>{prescriptionId}</td>
          <td>
            <Moment format="DD/MM/YYYY">{issuedOn}</Moment>
          </td>
          <td>{isCompleted ? "Да" : "Не"}</td>
        </>
      )}
    </tr>
  )
}

export default PatientData
