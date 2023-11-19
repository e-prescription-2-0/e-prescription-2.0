import { all, call, spawn } from "@redux-saga/core/effects"
import medicinesSaga from "./medicines"

export default function* index() {
  const sagas = [medicinesSaga]

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
