import { combineReducers } from "@reduxjs/toolkit"
import { medicinesSlice } from "./medinices"
import { usersSlice } from "./users"
import { prescriptionsSlice } from "./prescriptions"
import { doctorsSlice } from "./doctors"

export default combineReducers({
  medicines: medicinesSlice.reducer,
  users: usersSlice.reducer,
  prescriptions: prescriptionsSlice.reducer,
  doctors: doctorsSlice.reducer
})
