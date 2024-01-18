import { all, call, spawn } from "@redux-saga/core/effects"
import authSaga from "./auth"
import medicinesSaga from "./medicines"
import prescriptionsSaga from "./prescriptions"
import searchSaga from "./search"
import usersSaga from "./users"

export default function* index() {
  const sagas = [
    medicinesSaga,
    usersSaga,
    prescriptionsSaga,
    authSaga,
    searchSaga,
  ]

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
