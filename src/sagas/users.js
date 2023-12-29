import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import { doctorsData } from "../mockData";
import doctorsService from "../services/doctors-service";
import { doctorsSlice } from "../reducers/doctors";

function* onFetchDoctors(action) {
  try {
    // Access the current state using select
    const state = yield select();
    console.log('State', state)
    const result = yield call(doctorsService.getDoctors, {
      pageNumber: state.doctors.currentPage,
      searchEmail: state.doctors.doctorsPageSearch,
    });

    console.log(result);
    yield put(doctorsSlice.actions.setDoctors(result.doctors));
    yield put(doctorsSlice.actions.setNumberOfAllPages(result.numberPages));
    
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

function* onFetchDoctorById(action) {
  try {
    console.log(action);
    // const result = yield callExpression()

    // console.log(doctorsData)
    yield put(
      doctorsSlice.actions.setDoctors(
        doctorsData.filter((doctor) => doctor.id === action.payload)
      )
    );
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(doctorsSlice.actions.fetchDoctors, onFetchDoctors),
    takeLatest(doctorsSlice.actions.fetchDoctorById, onFetchDoctorById),
  ]);
}
