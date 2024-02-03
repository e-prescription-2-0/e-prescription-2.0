import { all, put, takeLatest } from "@redux-saga/core/effects"
import { medicinesData } from "../mockData"
import { medicinesSlice } from "../reducers/medinices"

function* onFetchMedicines() {
  try {
    yield put(medicinesSlice.actions.setMedicines(medicinesData))
  } catch (error) {
    console.log(error)
  }
}

export default function* medicinesSaga() {
  yield all([
    takeLatest(medicinesSlice.actions.fetchMedicines, onFetchMedicines),
  ])
}
