import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  collectionPatients: {},
  collectionDoctors: {},
  currentPage: 1,
  pageSearch: "",
  numberOfAllPages: 1,
  loading: true,
  loadingPatient: true,
  searchType: "",
  errorFetchingPatient: false,
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

    setCollectionPatients: (state, action) => {
      const {search , collection, page, numberPages} =action.payload

      if (state.collectionPatients?.[search]) {
        state.collectionPatients[search] = {
          ...state.collectionPatients[search],
          [page]: collection,
          numberPages
        };
      } else {
        state.collectionPatients = {
          ...state.collectionPatients,
          [search]: { [page]: collection, numberPages },
        };
      }
    },

    setCollectionDoctors: (state, action) => {
      const {search , collection, page, numberPages} =action.payload

      if (state.collectionDoctors?.[search]) {
        state.collectionDoctors[search] = {
          ...state.collectionDoctors[search],
          [page]: collection,
          numberPages
        };
      } else {
        state.collectionDoctors = {
          ...state.collectionDoctors,
          [search]: { [page]: collection, numberPages },
        };
      }
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
