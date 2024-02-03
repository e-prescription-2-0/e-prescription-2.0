import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import { useSelector } from "react-redux"
import PatientData from "./PatientData"
import styles from "./PatientsTable.module.css"

const PatientTable = ({
  hidePatientList,
  patientsList,
  searchType,
  isPrescriptionCreateMode,
  isMyPatientsChecked,
}) => {
  const [myList, setMyList] = useState([])
  const { patients: myPatients } = useSelector((state) => state.auth.authUser)

  useEffect(() => {
    if (isMyPatientsChecked) {
      const filteredList = patientsList.filter((f) =>
        myPatients.includes(f._id)
      )
      setMyList(filteredList)
    } else {
      setMyList(patientsList)
    }
  }, [isMyPatientsChecked, patientsList, myPatients])

  return (
    <div className={styles["patient-table-container"]}>
      <Table
        striped
        hover
        responsive="sm"
        size="sm"
        className={styles["stripped-table"]}
      >
        <thead>
          <tr>
            {searchType !== "prescriptions" ? (
              <>
                <th>Собствено Име</th>
                <th>Фамилия</th>
                {searchType === "patients" && (
                  <>
                    <th>ЕГН</th>
                    <th></th>
                    {!isPrescriptionCreateMode && <th></th>}
                  </>
                )}
                {searchType === "doctors" && (
                  <>
                    <th>email</th>
                    <th>специалност</th>
                    <th>Здравно заведение</th>
                  </>
                )}
                {isPrescriptionCreateMode && <th></th>}
              </>
            ) : (
              <>
                <th>Номер на рецепта</th>
                <th>Издадена на</th>
                <th>Завършена</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className={styles["tbody-list"]}>
          {myList.length === 0 ? (
            <tr style={{ fontWeight: "700" }}>
              <td colSpan={20}>
                Няма намерени резултати по посочения критерий
              </td>
            </tr>
          ) : (
            myList.map((p) => {
              return (
                <PatientData
                  key={p._id}
                  {...p}
                  hidePatientList={hidePatientList}
                  searchType={searchType}
                  isPrescriptionCreateMode={isPrescriptionCreateMode}
                  isMyPatientsChecked={isMyPatientsChecked}
                />
              )
            })
          )}
        </tbody>
      </Table>
    </div>
  )
}
export default PatientTable
