import { combineReducers } from "@reduxjs/toolkit"
import { medicinesSlice } from "./medinices"
import { usersSlice } from "./users"

export default combineReducers({
  medicines: medicinesSlice.reducer,
  users: usersSlice.reducer,
})
