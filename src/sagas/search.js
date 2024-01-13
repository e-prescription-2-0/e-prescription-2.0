import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import searchService from "../services/search-service";
import { searchSlice } from "../reducers/search";

function* onFetchDoctors(action) {
  try {
    // Access the current state using select
    const { page, search } = action.payload;

    const result = yield call(searchService.getDoctors, {
      page,
      search,
    });

    yield put(
      searchSlice.actions.setCollectionDoctors({
        collection: result.doctors,
        numberPages: result.numberPages,
        page,
        search,
      })
    );
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

function* onFetchAllPatients(action) {
  try {
    const { page, search } = action.payload;

    const result = yield call(searchService.getAllPatients, {
      page,
      search,
    });

    yield put(
      searchSlice.actions.setCollectionAllPatients({
        collection: result.patients,
        numberPages: result.numberPages,
        page,
        search,
      })
    );
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

function* onFetchMyPatients(action) {
  try {
    const { page, search } = action.payload;

    const result = yield call(searchService.getMyPatients, {
      doctorId: "658f0b9d1a1925a19548cc8e",
      page,
      search,
    });

    yield put(
      searchSlice.actions.setCollectionMyPatients({
        collection: result.patients,
        numberPages: result.numberPages,
        page,
        search,
      })
    );
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}


function* onFetchAllPrescriptions(action) {
  try {
    const { page, search } = action.payload;

    const result = yield call(searchService.getAllPrescriptions, {
      page,
      search,
    });

    yield put(
      searchSlice.actions.setCollectionAllPrescriptions({
        collection: result.patients,
        numberPages: result.numberPages,
        page,
        search,
      })
    );
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

export default function* searchSaga() {
  yield all([
    takeLatest(searchSlice.actions.fetchDoctors, onFetchDoctors),
    takeLatest(searchSlice.actions.fetchAllPatients, onFetchAllPatients),
    takeLatest(searchSlice.actions.fetchMyPatients, onFetchMyPatients),
    takeLatest(searchSlice.actions.fetchAllPrescriptions, onFetchAllPrescriptions),
  ]);
}
