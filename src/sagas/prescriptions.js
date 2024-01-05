import { all, put, takeLatest } from "@redux-saga/core/effects"
import { prescriptionsData } from "../mockData"
import { prescriptionsSlice } from "../reducers/prescriptions"

function* onFetchMyPrescriptions() {
  try {
    //Preform api call here
    // const response = yield call("api/")


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
