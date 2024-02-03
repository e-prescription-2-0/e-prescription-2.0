import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import {
  clearAuthUser,
  fetchLoginUser,
  fetchLogoutUser,
  fetchRegisteredUser,
  setAuthUser,
  setLoading,
} from "../reducers/auth"
import authService from "../services/authentication-service"

import { setMessages } from "../reducers/messageDispatcher"
import { getToken } from "../utils/getToken"

function* onRegister(action) {
  try {
    yield put(setLoading(true))
    const user = yield call(authService.register, action.payload)

    yield put(setAuthUser(user))
    yield put(setMessages({ type: "", text: "Вие се регистрирахте успешно " }))
  } catch (error) {
    yield put(setMessages({ type: "error", text: error.response.data.error }))
  } finally {
    yield put(setLoading(false))
  }
}

function* onLogin(action) {
  try {
    yield put(setLoading(true))
    const user = yield call(authService.login, action.payload)

    yield put(setAuthUser(user))
    yield put(setMessages({ type: "", text: "Успешно влизане" }))
  } catch (error) {
    yield put(setMessages({ type: "error", text: error.response.data.error }))
  }
  yield put(setLoading(false))
}

function* onLogout() {
  try {
    const accessToken = getToken()

    if (!accessToken) {
      return
    }

    yield all([
      call(
        authService.logout,
        {},
        { additionalHeaders: { "X-Authorization": accessToken } }
      ),
      put(clearAuthUser()),
    ])

    yield put(setMessages({ type: "", text: "Вие излязохте успешно" }))
  } catch (error) {
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
