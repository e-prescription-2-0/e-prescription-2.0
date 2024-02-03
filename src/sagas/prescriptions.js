import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { prescriptionsSlice } from "../reducers/prescriptions"
import prescriptionsService from "../services/prescriptions-service"
import { getToken } from "../utils/getToken"

const user = {
  role: "doctor",
  userId: "658f0b9d1a1925a19548cc8e",
}

function* onFetchMyPrescriptions() {
  try {
    const accessToken = getToken()

    yield put(prescriptionsSlice.actions.setPrescription({}))

    // let result = yield call(prescriptionsService.getPrescriptions);

    if (!accessToken) {
      return
    }

    let result = yield call(
      prescriptionsService.getMyPrescriptions,
      {},
      { additionalHeaders: { "X-Authorization": accessToken } }
    )

    yield put(prescriptionsSlice.actions.setMyPrescriptions(result))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchActivePrescription() {
  try {
    let result = yield call(prescriptionsService.getPrescriptions)
    result = result.prescriptions.filter((x) => x.isCompleted === false)

    yield put(prescriptionsSlice.actions.setMyPrescriptions(result))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchCompletedPrescription() {
  try {
    let result = yield call(prescriptionsService.getPrescriptions)
    result = result.prescriptions.filter((x) => x.isCompleted === true)

    yield put(prescriptionsSlice.actions.setMyPrescriptions(result))
    yield put(prescriptionsSlice.actions.setLoading(false))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchPrescription(action) {
  const prescriptionId = action.payload
  try {
    const result = yield call(prescriptionsService.getPrescription, {
      prescriptionId,
    })

    yield put(prescriptionsSlice.actions.setPrescription(result))
    yield put(prescriptionsSlice.actions.setLoading(false))
  } catch (error) {
    console.log(error)
  }
}

function* onCreatePrescription(action) {
  try {
    const prescription = yield call(
      prescriptionsService.createPrescription,
      action.payload
    )
    //server return prescription with prescribedBy, prescribedTo and medicines like ID, thats why we can`t save the prescription direct in all prescription in redux

    yield put(prescriptionsSlice.actions.setCreatedPrescription(prescription))
  } catch (error) {
    console.log(error)
  }
}

function* onCompletePrescription(action) {
  const prescriptionId = action.payload
  try {
    const result = yield call(prescriptionsService.completePrescription, {
      prescriptionId,
    })

    yield put(prescriptionsSlice.actions.setPrescription(result))
  } catch (error) {
    console.log(error)
  }
}

function* onDeletePrescription(action) {
  try {
    const prescriptionId = action.payload
    const result = yield call(prescriptionsService.deletePrescription, {
      prescriptionId,
    })

    yield put(prescriptionsSlice.actions.removeDeletedPrescription(result))
  } catch (error) {
    console.log(error)
  }
}

export default function* prescriptionsSaga() {
  yield all([
    takeLatest(
      prescriptionsSlice.actions.fetchMyPrescriptions,
      onFetchMyPrescriptions
    ),
    takeLatest(
      prescriptionsSlice.actions.fetchCreatePrescription,
      onCreatePrescription
    ),
    takeLatest(
      prescriptionsSlice.actions.fetchPrescription,
      onFetchPrescription
    ),
    takeLatest(
      prescriptionsSlice.actions.completePrescription,
      onCompletePrescription
    ),
    takeLatest(
      prescriptionsSlice.actions.deletePrescription,
      onDeletePrescription
    ),
    takeLatest(
      prescriptionsSlice.actions.fetchActivePrescription,
      onFetchActivePrescription
    ),
    takeLatest(
      prescriptionsSlice.actions.fetchCompletedPrescription,
      onFetchCompletedPrescription
    ),
  ])
}
