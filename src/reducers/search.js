import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  currentPage: 1,
  pageSearch: "",
  numberOfAllPages: 1,
  loading: true,
  loadingPatient: true,
  searchType: "",
  errorFetchingPatient: false

};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.loading = true;
    },
    fetchDoctors: (state, action) => {},
    fetchPatients: (state, action) => {},

    fetchDoctorById: (state, action) => {},
    setList: (state, action) => {
      const list = action.payload;
      state.list = [...list];
    },

    setNumberOfAllPages: (state, action) => {
      state.numberOfAllPages = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoadingPatient: (state, action) => {
      state.loadingPatient = action.payload;
    },
    setErrorFetchingPatient: (state, action) => {
      state.errorFetchingPatient = action.payload;
    },
    setPageSearch: (state, action) => {
      state.pageSearch = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});
