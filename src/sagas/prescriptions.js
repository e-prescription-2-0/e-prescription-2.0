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

function* onFetchActivePrescription() {
  try {
      let result = yield call(prescriptionsService.getPrescriptions)
      result = result.prescriptions.filter(x => x.isCompleted === false);

      yield put(prescriptionsSlice.actions.setMyPrescriptions(result))
  } catch (error) {
    console.log(error);
  }
}

function* onFetchCompletedPrescription() {
  try {
      let result = yield call(prescriptionsService.getPrescriptions)
      result = result.prescriptions.filter(x => x.isCompleted === true);

      yield put(prescriptionsSlice.actions.setMyPrescriptions(result))
  } catch (error) {
    console.log(error);
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
    console.log(prescription);
    //server return prescription with prescribedBy, prescribedTo and medicines like ID, thats why we can`t save the prescription direct in all prescription in redux


    // yield put(prescriptionsSlice.actions.setCreatedPrescription(prescription));
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

function* onDeletePrescription(action) {
  try {
    const prescriptionId = action.payload
    const result = yield call(prescriptionsService.deletePrescription, {
      prescriptionId
    })

    yield put(prescriptionsSlice.actions.removeDeletedPrescription(result))
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}


export default function* prescriptionsSaga() {
  yield all([
    takeLatest(prescriptionsSlice.actions.fetchMyPrescriptions, onFetchMyPrescriptions),
    takeLatest(prescriptionsSlice.actions.fetchCreatePrescription, onCreatePrescription),
    takeLatest(prescriptionsSlice.actions.fetchPrescription, onFetchPrescription),
    takeLatest(prescriptionsSlice.actions.completePrescription, onCompletePrescription),
    takeLatest(prescriptionsSlice.actions.deletePrescription, onDeletePrescription),
    takeLatest(prescriptionsSlice.actions.fetchActivePrescription, onFetchActivePrescription),
    takeLatest(prescriptionsSlice.actions.fetchCompletedPrescription, onFetchCompletedPrescription)
  ])
}
