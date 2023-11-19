import { all, put, takeLatest } from "@redux-saga/core/effects"
import { medicinesSlice } from "../reducers/medinices"

const medicinesData = [
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Analgin",
    signature: "2 x 1 тб",
    description:
      "Аналгин таблетки съдържа активно вещество метамизол натрий, което се отнася към обезболяващите лекарства (аналгетици). Освен обезболяващо, той притежава и температуропонижаващо действие. Аналгин се използва за: повлияване на умерено до силно изразени болки от различен произход: главоболие, зъбобол, невралгии, неврити, миалгии (мускулни болки), травми, изгаряния, следоперативни болки, фантомни болки (усещане за болка на мястото на отсъстващ крайник), менструални болки, болки при онкологични заболявания, бъбречни и жлъчни колики, за понижаване на висока температура.",
  },
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Paracetamol",
    signature: "2 x 1 тб",
    description: "",
  },
]

function* onFetchMedicines() {
  try {
    //Preform api call here
    // const response = yield call("/mockData/medicines");

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
