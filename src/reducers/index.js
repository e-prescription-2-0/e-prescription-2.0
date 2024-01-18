import { combineReducers } from "@reduxjs/toolkit"
import { medicinesSlice } from "./medinices"
import { usersSlice } from "./users"
import { prescriptionsSlice } from "./prescriptions"
import { authSlice } from "./auth"
import { messagesSlice } from "./messageDispatcher"

export default combineReducers({
  medicines: medicinesSlice.reducer,
  users: usersSlice.reducer,
  prescriptions: prescriptionsSlice.reducer,
  auth: authSlice.reducer,
  messages: messagesSlice.reducer
})
