import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import authService from '../services/authentication-service';
import { setAuthUserByRegister, setAuthUserByLogin, clearAuthUser, fetchRegisteredUser, fetchLoginUser, fetchLogoutUser } from "../reducers/auth";

import {setMessages} from '../reducers/messageDispatcher'



function* onRegister(action) {
    try {

        const user = yield call(authService.register, action.payload);

        yield put(setAuthUserByRegister(user));
        yield put(setMessages({type:'', text: 'Вие се регистрирахте успешно '}))
    } catch (error) {
        yield put(setMessages({type:'error', text: error.response.data.error}))
        
    }
}


function* onLogin(action) {
    try {

        const user = yield call(authService.login,action.payload);
        
        yield put(setAuthUserByLogin(user))
        yield put(setMessages({type:'', text: 'Успешно влизане'}))
    } catch (error) {
        yield put(setMessages({type:'error', text: error.response.data.error}))
       
    }
}

function* onLogout() {
    try {

        yield call(authService.logout);
        yield put(clearAuthUser())
        yield put(setMessages({type:'', text: 'Вие излязохте успешно'}))

    } catch (error) {
        console.log(error);
        yield put(setMessages({type:'error', text: error.message}))

    }
}


export default function* authSaga() {
    yield all([
        takeLatest(fetchRegisteredUser, onRegister),
        takeLatest(fetchLoginUser, onLogin),
        takeLatest(fetchLogoutUser, onLogout),

    ])
}





