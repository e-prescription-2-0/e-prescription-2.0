import { all, call, spawn } from "@redux-saga/core/effects"
import medicinesSaga from "./medicines"
import usersSaga from "./users"
import prescriptionsSaga from "./prescriptions"

export default function* index() {
  const sagas = [medicinesSaga, usersSaga, prescriptionsSaga]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (err) {
            console.log("Error:" + err)
          }
        }
      })
    )
  )
}
