import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import searchService from "../services/search-service";
import { searchSlice } from "../reducers/search";
import { patientsData } from "../mockData";
function* onFetchDoctors(action) {
  try {
    // Access the current state using select
    const {page, search} = action.payload;

    
    const result = yield call(searchService.getDoctors, {
      page,
      search
    });

    yield put(
      searchSlice.actions.setCollectionDoctors({
        collection: result.doctors,
        numberPages: result.numberPages,
        page,
        search
      })
    );
    yield put(searchSlice.actions.setNumberOfAllPages(result.numberPages));

    yield put(searchSlice.actions.setLoading(false));
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}


function* onFetchAllPatients(action) {
  try {
    const {page, search} = action.payload;

    const result = yield call(searchService.getAllPatients, {
      page,
      search,
    });

    yield put(
      searchSlice.actions.setCollectionPatients({
        collection: result.patients,
        numberPages: result.numberPages,
        page,
        search
      })
    );
    yield put(searchSlice.actions.setNumberOfAllPages(result.numberPages));

    yield put(searchSlice.actions.setLoading(false));
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

export default function* searchSaga() {
  yield all([
    takeLatest(searchSlice.actions.fetchDoctors, onFetchDoctors),
    takeLatest(searchSlice.actions.fetchPatients, onFetchAllPatients),
  ]);
}
