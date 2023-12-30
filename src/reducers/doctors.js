import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
  doctorsById: {},
  currentPage: 1,
  doctorsPageSearch: "",
  numberOfAllPages: 0,
  loading: true,
};

export const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    fetchDoctors: (state, action) => {},
    setDoctors: (state, action) => {
      const doctors = action.payload;
      state.doctors = [...doctors];
    },
    fetchDoctorById: (state, action) => {},
    setDoctor: (state, action) => {
      //   state.doctorsById[action.payload.id] = action.payload
      state.doctors.push(action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.loading = true;
    },
    setNumberOfAllPages: (state, action) => {
      state.numberOfAllPages = action.payload;
    },
    setLoading: (state,action)=>{
      state.loading = action.payload
    },
    setDoctorsPageSearch: (state,action) =>{
      state.doctorsPageSearch = action.payload
    }

  },
});
