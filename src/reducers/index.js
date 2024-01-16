import { combineReducers } from "@reduxjs/toolkit"
import { medicinesSlice } from "./medinices"
import { prescriptionsSlice } from "./prescriptions"
import { searchSlice } from "./search"
import { usersSlice } from "./users"

export default combineReducers({
  medicines: medicinesSlice.reducer,
  users: usersSlice.reducer,
  prescriptions: prescriptionsSlice.reducer,
  search: searchSlice.reducer
})
