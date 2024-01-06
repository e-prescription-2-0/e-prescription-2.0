import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import authService from '../services/authentication-service';
import { setAuthUser,clearAuthUser } from "../reducers/auth";




function* onRegister() {
    try {
        const user = yield call(authService.register);
        yield put(setAuthUser(user))
    } catch (error){

        console.log(error);
    }
}


export default function* authSaga() {
    yield all([
      takeLatest(setAuthUser, onRegister),
     
    ])
  }





