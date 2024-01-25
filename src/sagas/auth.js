import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import {
  clearAuthUser,
  fetchLoginUser,
  fetchLogoutUser,
  fetchRegisteredUser,
  setAuthUserByLogin,
  setAuthUserByRegister,
} from "../reducers/auth"
import authService from "../services/authentication-service"

import { setMessages } from "../reducers/messageDispatcher"
import { getToken } from "../utils/getToken"

function* onRegister(action) {
  try {
    const user = yield call(authService.register, action.payload)

    yield put(setAuthUserByRegister(user))
    yield put(setMessages({ type: "", text: "Вие се регистрирахте успешно " }))
  } catch (error) {
    yield put(setMessages({ type: "error", text: error.response.data.error }))
  }
}

function* onLogin(action) {
  try {
    const user = yield call(authService.login, action.payload)

    yield put(setAuthUserByLogin(user))
    yield put(setMessages({ type: "", text: "Успешно влизане" }))
  } catch (error) {
    yield put(setMessages({ type: "error", text: error.response.data.error }))
  }
}

function* onLogout() {
  try {
    const accessToken = getToken()

    if (!accessToken) {
      return
    }
    yield all([call(authService.logout), put(clearAuthUser())])

    yield put(setMessages({ type: "", text: "Вие излязохте успешно" }))
  } catch (error) {
    console.log(error)
    yield put(setMessages({ type: "error", text: error.message }))
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(fetchRegisteredUser, onRegister),
    takeLatest(fetchLoginUser, onLogin),
    takeLatest(fetchLogoutUser, onLogout),
  ])
}
