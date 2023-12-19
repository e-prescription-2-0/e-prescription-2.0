import { all, put, takeLatest } from "@redux-saga/core/effects"
import { doctorsData } from "../mockData"
import { usersSlice } from "../reducers/users"

function* onFetchDoctors() {
  try {
    // const result = yield callExpression()

    // console.log(doctorsData)
    yield put(usersSlice.actions.setDoctors(doctorsData))
  } catch (error) {
    console.log("====================================")
    console.log(error)
    console.log("====================================")
  }
}

function* onFetchDoctorById(action) {
  try {
    console.log(action)
    // const result = yield callExpression()

    // console.log(doctorsData)
    yield put(
      usersSlice.actions.setDoctors(
        doctorsData.filter((doctor) => doctor.id === action.payload)
      )
    )
  } catch (error) {
    console.log("====================================")
    console.log(error)
    console.log("====================================")
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(usersSlice.actions.fetchDoctors, onFetchDoctors),
    takeLatest(usersSlice.actions.fetchDoctorById, onFetchDoctorById),
  ])
}
