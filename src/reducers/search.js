import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionPatients: {},
  collectionDoctors: {},
  loading: true,
}
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchDoctors: (state, action) => {},
    fetchPatients: (state, action) => {},

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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});
