import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  clearAuthUser,
  fetchLoginUser,
  fetchLogoutUser,
  fetchRegisteredUser,
  setAuthUserByLogin,
  setAuthUserByRegister,
  setLoading,
} from "../reducers/auth";
import authService from "../services/authentication-service";

import { setMessages } from "../reducers/messageDispatcher";
import { getToken } from "../utils/getToken";

function* onRegister(action) {
  try {
    yield put(setLoading(true));
    const user = yield call(authService.register, action.payload);
    yield put(setMessages({ type: "", text: "Вие се регистрирахте успешно " }));
    yield put(setAuthUserByRegister(user));
  } catch (error) {
    yield put(setMessages({ type: "error", text: error.response.data.error }));
  }
  yield put(setLoading(false));
}

function* onLogin(action) {
  try {
    yield put(setLoading(true));
    const user = yield call(authService.login, action.payload);
    yield put(setMessages({ type: "", text: "Успешно влизане" }));
    yield put(setAuthUserByLogin(user));
  } catch (error) {
    yield put(setMessages({ type: "error", text: error.response.data.error }));
  }
  yield put(setLoading(false));
}

function* onLogout() {
  try {
    const accessToken = getToken();

    if (!accessToken) {
      return;
    }
    yield all([call(authService.logout), put(clearAuthUser())]);

    yield put(setMessages({ type: "", text: "Вие излязохте успешно" }));
  } catch (error) {
    console.log(error);
    yield put(setMessages({ type: "error", text: error.message }));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(fetchRegisteredUser, onRegister),
    takeLatest(fetchLoginUser, onLogin),
    takeLatest(fetchLogoutUser, onLogout),
  ]);
}
