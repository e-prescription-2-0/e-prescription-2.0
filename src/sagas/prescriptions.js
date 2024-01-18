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

    // TO GET THE PRESCRIPTION OF THE CURRENT USER
    
    // if (user.role !== "pharmacist") {
    //   if (user.role === "doctor") {
    //     typeOfRole = "prescribedBy";
    //   } else if (user.role === "patient") {
    //     typeOfRole = "prescribedTo";
    //   }
    //   result = result.filter(prescription => prescription.typeOfRole === user.userId);
    // }

    yield put(prescriptionsSlice.actions.setMyPrescriptions(result.prescriptions))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchPrescription(action) {
  const prescriptionId = action.payload
  try {
    const result = yield call(prescriptionsService.getPrescription, {
      prescriptionId
    })

    yield put(prescriptionsSlice.actions.setPrescription(result))
  } catch (error) {
    console.log(error);
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

function* onCompletePrescription(action) {
  const prescriptionId = action.payload
  try {
    const result = yield call(prescriptionsService.completePrescription, {
      prescriptionId
    });

    yield put(prescriptionsSlice.actions.setPrescription(result))
  } catch (error) {
    console.log(error);
  }
}


export default function* prescriptionsSaga() {
  yield all([
    takeLatest(prescriptionsSlice.actions.fetchMyPrescriptions, onFetchMyPrescriptions),
    takeLatest(prescriptionsSlice.actions.fetchCreatePrescription, onCreatePrescription),
    takeLatest(prescriptionsSlice.actions.fetchPrescription, onFetchPrescription),
    takeLatest(prescriptionsSlice.actions.completePrescription, onCompletePrescription)
  ])
}
