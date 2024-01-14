import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import authService from '../services/authentication-service';
import { setAuthUserByRegister, setAuthUserByLogin, clearAuthUser, fetchRegisteredUser, fetchLoginUser, fetchLogoutUser } from "../reducers/auth";

import {setMessages} from '../reducers/messageDispatcher'



function* onRegister(action) {
    try {

        const user = yield call(authService.register, action.payload);

        yield put(setAuthUserByRegister(user))
    } catch (error) {
        yield put(setMessages({type:'error', text: error}))
        console.log(error);
    }
}


function* onLogin(action) {
    try {

        const user = yield call(authService.login,action.payload);
        
        yield put(setAuthUserByLogin(user))
    } catch (error) {
        yield put(setMessages({type:'error', text: error.message}))

        console.log(error.message);
    }
}

function* onLogout() {
    try {

       // yield call(requestLogout);
        yield call(authService.logout);

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





