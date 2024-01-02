import { all, call, spawn } from "@redux-saga/core/effects"
import medicinesSaga from "./medicines"
import prescriptionsSaga from "./prescriptions"
import searchSaga from "./search"

export default function* index() {
  const sagas = [medicinesSaga, searchSaga, prescriptionsSaga]

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
