import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  patientIds: [],
  patientsById: {},
  doctorIds: [],
  doctorsById: {},
  loading: true,
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchDoctors: () => {},
    setDoctors: (state, action) => {
      const doctorsList = action.payload
      doctorsList.forEach((doctor) => {
        const doctorId = doctor._id

        if (!state.doctorsById[doctorId]) {
          state.doctorsById[doctorId] = doctor
          state.doctorIds.push(doctorId)
        }
      })
    },
    fetchPatients: () => {},
    setPatients: (state, action) => {
      const patientsList = action.payload

      patientsList.forEach((patient) => {
        const patientId = patient.patientId

        if (!state.patientsById[patientId]) {
          state.patientsById[patientId] = patient
          state.patientIds.push(patientId)
        }
      })
    },
    fetchDoctorById: (state, action) => {},
    fetchPatientById: () => {},
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})
