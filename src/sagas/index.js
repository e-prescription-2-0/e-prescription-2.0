import { all, call, spawn } from "@redux-saga/core/effects"
import medicinesSaga from "./medicines"
import usersSaga from "./users"
import prescriptionsSaga from "./prescriptions"
import authSaga from "./auth"

export default function* index() {
  const sagas = [medicinesSaga, usersSaga, prescriptionsSaga,authSaga]

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
