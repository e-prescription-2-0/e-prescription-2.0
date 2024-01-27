import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { searchSlice } from "../reducers/search";
import { usersSlice } from "../reducers/users";
import usersService from "../services/users-service";

function* onFetchProfile(action) {
  try {
    yield put(usersSlice.actions.setLoading(true));

    const result = yield call(usersService.getProfile, {
      id: action.payload,
    });
    console.log(result);

    yield put(usersSlice.actions.setProfile(result));
    yield put(usersSlice.actions.setLoading(false));
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

function* onFetchPatientProfile(action) {
  try {
    const result = yield call(usersService.getPatientProfile, {
      patientId: action.payload,
    });

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

export default function* usersSaga() {
  yield all([
    takeLatest(usersSlice.actions.fetchProfile, onFetchProfile),
    takeLatest(usersSlice.actions.fetchPatientProfile, onFetchPatientProfile),
  ]);
}
