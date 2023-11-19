import { combineReducers } from "@reduxjs/toolkit"
import { medicinesSlice } from "./medinices"

export default combineReducers({
  medicines: medicinesSlice.reducer,
})
