import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import doctorsService from "../services/doctors-service";
import { searchSlice } from "../reducers/search";

function* onFetchDoctors(action) {
  try {
    // Access the current state using select
    const state = yield select();
    console.log('State', state)
    const result = yield call(doctorsService.getDoctors, {
      pageNumber: state.search.currentPage,
      searchEmail: state.search.pageSearch,
    });

    console.log(result);
    yield put(searchSlice.actions.setList(result.doctors));
    yield put(searchSlice.actions.setNumberOfAllPages(result.numberPages));
    
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }finally {
    // Dispatch setLoading(false) after the API call is complete (success or error)
    yield put(searchSlice.actions.setLoading(false));
  }

}

// function* onFetchDoctorById(action) {
//   try {
//     console.log(action);
//     // const result = yield callExpression()

//     // console.log(doctorsData)
//     yield put(
//       doctorsSlice.actions.setDoctors(
//         doctorsData.filter((doctor) => doctor.id === action.payload)
//       )
//     );
//   } catch (error) {
//     console.log("====================================");
//     console.log(error);
//     console.log("====================================");
//   }
// }

export default function* searchSaga() {
  yield all([
    takeLatest(searchSlice.actions.fetchDoctors, onFetchDoctors),
    // takeLatest(searchSlice.actions.fetchDoctorById, onFetchDoctorById),
  ]);
}
