import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allMyPrescriptions: [],
}

export const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    fetchMyPrescriptions: () => {},
    setMyPrescriptions: (state, action) => {
      console.log("action", action)
      state.allMyPrescriptions = [...action.payload]
    },
  },
})
