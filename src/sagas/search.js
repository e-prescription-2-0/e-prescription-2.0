import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import searchService from "../services/search-service";
import { searchSlice } from "../reducers/search";
import {patientsData} from "../mockData"
function* onFetchDoctors(action) {
  try {
    // Access the current state using select
    const state = yield select();
    console.log('State', state)
    const result = yield call(searchService.getDoctors, {
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


function* onFetchPatients(action) {
  try {
    // // Access the current state using select
    // const state = yield select();
    // console.log('State', state)
    // const result = yield call(searchService.getPatients, {
    //   pageNumber: state.search.currentPage,
    //   searchEmail: state.search.pageSearch,
    // });

    // console.log(result);
    yield put(searchSlice.actions.setList(patientsData));
    // yield put(searchSlice.actions.setNumberOfAllPages(result.numberPages));
    
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }finally {
    // Dispatch setLoading(false) after the API call is complete (success or error)
    yield put(searchSlice.actions.setLoading(false));
  }

}

export default function* searchSaga() {
  yield all([
    takeLatest(searchSlice.actions.fetchDoctors, onFetchDoctors),
    takeLatest(searchSlice.actions.fetchPatients, onFetchPatients),

  ]);
}
