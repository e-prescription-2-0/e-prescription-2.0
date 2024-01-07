import { all, put, call, takeLatest } from "@redux-saga/core/effects"
import { prescriptionsData } from "../mockData"
import { prescriptionsSlice } from "../reducers/prescriptions"
import prescriptionsService from "../services/prescriptions-service"

function* onFetchMyPrescriptions() {
  try {
    const result = yield call(prescriptionsService.getPrescriptions)
    // yield put(prescriptionsSlice.actions.setMyPrescriptions(result))

    yield put(prescriptionsSlice.actions.setMyPrescriptions(prescriptionsData))
  } catch (error) {
    console.log(error)
  }
}

export default function* prescriptionsSaga() {
  yield all([
    takeLatest(prescriptionsSlice.actions.fetchMyPrescriptions, onFetchMyPrescriptions),
  ])
}
