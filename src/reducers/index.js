import { combineReducers } from "@reduxjs/toolkit"
import { authSlice } from "./auth"
import { dashboardSlice } from "./dashboard"
import { medicinesSlice } from "./medinices"
import { messagesSlice } from "./messageDispatcher"
import { prescriptionsSlice } from "./prescriptions"
import { searchSlice } from "./search"
import { usersSlice } from "./users"

export default combineReducers({
  medicines: medicinesSlice.reducer,
  users: usersSlice.reducer,
  prescriptions: prescriptionsSlice.reducer,
  dashboard: dashboardSlice.reducer,
  search: searchSlice.reducer,
  auth: authSlice.reducer,
  messages: messagesSlice.reducer,
})
