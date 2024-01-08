import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { searchSlice } from "../reducers/search"
import searchService from "../services/search-service"

function* onFetchDoctors() {
  try {
    const { doctors, numberPages } = yield call(searchService.getAllDoctors)

    yield put(searchSlice.actions.setDoctors(doctors))

    yield put(searchSlice.actions.setLoading(false))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchDoctorById(action) {
  try {
    const doctorId = action.payload

    const { doctors, numberPages } = yield call(
      searchService.getDoctorById,
      doctorId
    )

    yield put(searchSlice.actions.setDoctors(doctors))

    yield put(searchSlice.actions.setLoading(false))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchPatients() {
  try {
    const { patients, numberPages } = yield call(searchService.getAllPatients)

    yield put(searchSlice.actions.setPatients(patients))

    yield put(searchSlice.actions.setLoading(false))
  } catch (error) {
    console.log(error)
  }
}

function* onFetchPatientById(action) {
  try {
    const patientId = action.payload

    const { patients, numberPages } = yield call(
      searchService.getPatientById,
      patientId
    )

    yield put(searchSlice.actions.setPatients(patients))

    yield put(searchSlice.actions.setLoading(false))
  } catch (error) {
    console.log(error)
  }
}

export default function* searchSaga() {
  yield all([
    takeLatest(searchSlice.actions.fetchDoctors, onFetchDoctors),
    takeLatest(searchSlice.actions.fetchDoctorById, onFetchDoctorById),
    takeLatest(searchSlice.actions.fetchPatients, onFetchPatients),
    takeLatest(searchSlice.actions.fetchPatientById, onFetchPatientById),
  ])
}
