import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import authService from '../services/authentication-service';
import { setAuthUserByRegister, setAuthUserByLogin, clearAuthUser, fetchRegisteredUser, fetchLoginUser, fetchLogoutUser } from "../reducers/auth";
import { requestLogin,requestLogout } from "../services/authentication-service";





function* onRegister(action) {
    try {

        const user = yield call(authService.register, action.payload);

        yield put(setAuthUserByRegister(user))
    } catch (error) {

        console.log(error);
    }
}


function* onLogin(action) {
    try {

        const user = yield call(requestLogin,action.payload);
        
        yield put(setAuthUserByLogin(user))
    } catch (error) {

        console.log(error);
    }
}

function* onLogout() {
    try {

        yield call(requestLogout);

        yield put(clearAuthUser())
    } catch (error) {

        console.log(error);
    }
}


export default function* authSaga() {
    yield all([
        takeLatest(fetchRegisteredUser, onRegister),
        takeLatest(fetchLoginUser, onLogin),
        takeLatest(fetchLogoutUser, onLogout),

    ])
}





