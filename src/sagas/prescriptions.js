import { all, put, call, takeLatest } from "@redux-saga/core/effects"
import { prescriptionsData } from "../mockData"
import { prescriptionsSlice } from "../reducers/prescriptions"
import prescriptionsService from "../services/prescriptions-service";

const user = {
  role: "doctor",
  userId: "658f0b9d1a1925a19548cc8e"
}

function* onFetchMyPrescriptions() {
  try {
    let typeOfRole = '';
    let result = yield call(prescriptionsService.getPrescriptions);

    if (user.role === "doctor") {
      typeOfRole = "prescribedBy";
    } else if (user.role === "patient") {
      typeOfRole = "prescribedTo";
    }
    result = result.filter(prescription => prescription.typeOfRole === user.userId)
    // yield put(prescriptionsSlice.actions.setMyPrescriptions(result))

    yield put(prescriptionsSlice.actions.setMyPrescriptions(prescriptionsData))
  } catch (error) {
    console.log(error)
  }
}

function* onCreatePrescription(action) {
  try {
    const prescription = yield call(prescriptionsService.createPrescription, action.payload);

    yield put(prescriptionsSlice.actions.setCreatedPrescription(prescription));
  } catch (error) {
    console.log(error);
  }
}

export default function* prescriptionsSaga() {
  yield all([
    takeLatest(prescriptionsSlice.actions.fetchMyPrescriptions, onFetchMyPrescriptions),
    takeLatest(prescriptionsSlice.actions.fetchCreatePrescription, onCreatePrescription)
  ])
}
