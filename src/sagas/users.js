import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { usersSlice } from "../reducers/users";
import usersService from "../services/users-service";
import { searchSlice } from "../reducers/search";
import { setMessages } from "../reducers/messageDispatcher";
import { setAuthUser } from "../reducers/auth";

function* onFetchProfile(action) {
  try {
    const result = yield call(usersService.getProfile, {
      id: action.payload,
    })
   

    yield put(usersSlice.actions.setProfile(result))
  } catch (error) {
    console.log("====================================")
    console.log(error)
    console.log("====================================")
  } finally {
    // Dispatch setLoading(false) after the API call is complete (success or error)
    yield put(usersSlice.actions.setLoading(false))
  }
}

function* onFetchPatientProfile(action) {
  try {
    const result = yield call(usersService.getPatientProfile, {
      patientId: action.payload,
    })

    yield put(usersSlice.actions.setProfile(result));
    yield put(usersSlice.actions.setLoading(false));
    yield put(searchSlice.actions.setLoadingPatient(false));
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    yield put(searchSlice.actions.setErrorFetchingPatient(true));
  }
}

function* onFetchPatientListAdd(action) {

  const doctorId = action.payload.doctorId
  const patientId = action.payload.patientId
 

  try {
    const updatedUser = yield call(usersService.setToMyPatients,{doctorId,patientId})
    yield put(setAuthUser(updatedUser))
  } catch (error) {
   
    console.log(error);
   
    yield put(setMessages({ type: "error", text: error.message }))
  }
}

function* onFetchPatientListRemove(action) {

  const doctorId = action.payload.doctorId
  const patientId = action.payload.patientId
 

  try {
    const updatedUser = yield call(usersService.removeFromMyPatients,{doctorId,patientId})
    yield put(setAuthUser(updatedUser))
  } catch (error) {
   
    console.log(error);
   
    yield put(setMessages({ type: "error", text: error.message }))
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(usersSlice.actions.fetchProfile, onFetchProfile),
    takeLatest(usersSlice.actions.fetchPatientProfile, onFetchPatientProfile),
    takeLatest(usersSlice.actions.fetchSetToPatientList, onFetchPatientListAdd),
    takeLatest(usersSlice.actions.fetchRemoveFromPatientList, onFetchPatientListRemove),
  ]);
}
