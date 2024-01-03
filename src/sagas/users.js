import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import { usersSlice } from "../reducers/users";
import usersService from "../services/users-service";
import { useNavigate } from "react-router-dom";

function* onFetchProfile(action) {
    try {

      const result = yield call(usersService.getProfile, {
        id: action.payload,
      });
      console.log(result)
  
      yield put(usersSlice.actions.setProfile(result));
      
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }finally {
      // Dispatch setLoading(false) after the API call is complete (success or error)
      yield put(usersSlice.actions.setLoading(false));
    }
  
  }


  function* onFetchPatientProfile(action) {
    try {
      const result = yield call(usersService.getPatientProfile, {
        patientId: action.payload,
      });
  
      yield put(usersSlice.actions.setProfile(result));
      
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }finally {
      // Dispatch setLoading(false) after the API call is complete (success or error)
      yield put(usersSlice.actions.setLoading(false));
    }
  
  }
  
  export default function* usersSaga() {
    yield all([
      takeLatest(usersSlice.actions.fetchProfile, onFetchProfile),
      takeLatest(usersSlice.actions.fetchPatientProfile, onFetchPatientProfile),

  
    ]);
  }