import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  doctors: [],
  doctorsById: {},
  doctorsPageNumber: 1,
  doctorsPageSearch: ''

}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchDoctors: () => {},
    setDoctors: (state, action) => {
      const doctors = action.payload
      state.doctors = [...doctors]
    },
    fetchDoctorById: (state, action) => {},
    setDoctor: (state, action) => {
      //   state.doctorsById[action.payload.id] = action.payload
      state.doctors.push(action.payload)
    },
  },
})
