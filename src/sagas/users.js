import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { setAuthUser } from "../reducers/auth"
import { setMessages } from "../reducers/messageDispatcher"
import { searchSlice } from "../reducers/search"
import { usersSlice } from "../reducers/users"
import usersService from "../services/users-service"

function* onFetchProfile(action) {
  try {
    yield put(usersSlice.actions.setLoading(true))

    const result = yield call(usersService.getProfile, {
      id: action.payload,
    })

    yield put(usersSlice.actions.setProfile(result))
    yield put(usersSlice.actions.setLoading(false))
  } catch (error) {
    console.log("====================================")
    console.log(error)
    console.log("====================================")
  }
}

function* onFetchPatientProfile(action) {
  try {
    const result = yield call(usersService.getPatientProfile, {
      patientId: action.payload,
    })

    yield put(usersSlice.actions.setProfile(result))
    yield put(usersSlice.actions.setLoading(false))
    yield put(searchSlice.actions.setLoadingPatient(false))
  } catch (error) {
    console.log("====================================")
    console.log(error)
    console.log("====================================")
    yield put(searchSlice.actions.setErrorFetchingPatient(true))
  }
}

function* onFetchPatientListAdd(action) {
  const doctorId = action.payload.doctorId
  const patientId = action.payload.patientId

  try {
    const updatedUser = yield call(usersService.setToMyPatients, {
      doctorId,
      patientId,
    })
    yield put(setAuthUser(updatedUser))
  } catch (error) {
    console.log(error)

    yield put(setMessages({ type: "error", text: error.message }))
  }
}

function* onFetchPatientListRemove(action) {
  const doctorId = action.payload.doctorId
  const patientId = action.payload.patientId

  try {
    const updatedUser = yield call(usersService.removeFromMyPatients, {
      doctorId,
      patientId,
    })
    yield put(setAuthUser(updatedUser))
  } catch (error) {
    console.log(error)

    yield put(setMessages({ type: "error", text: error.message }))
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(usersSlice.actions.fetchProfile, onFetchProfile),
    takeLatest(usersSlice.actions.fetchPatientProfile, onFetchPatientProfile),
    takeLatest(usersSlice.actions.fetchSetToPatientList, onFetchPatientListAdd),
    takeLatest(
      usersSlice.actions.fetchRemoveFromPatientList,
      onFetchPatientListRemove
    ),
  ])
}
