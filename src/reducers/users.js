import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  role: ''

}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserRole: (state, action)=>{
      state.role = action.payload
    }
    // fetchDoctors: (state, action) => {},
    // setDoctors: (state, action) => {
    //   const doctors = action.payload
    //   state.doctors = [...doctors]
    // },
    // fetchDoctorById: (state, action) => {},
    // setDoctor: (state, action) => {
    //   //   state.doctorsById[action.payload.id] = action.payload
    //   state.doctors.push(action.payload)
    // },
  },
})
