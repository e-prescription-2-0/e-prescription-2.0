import { all, put, takeLatest } from "@redux-saga/core/effects"
import { medicinesData } from "../mockData"
import { medicinesSlice } from "../reducers/medinices"

function* onFetchMedicines() {
  try {
    //Preform api call here
    // const response = yield call("/mockData/medicines")
    // console.log("medicinesData", medicinesData)

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
