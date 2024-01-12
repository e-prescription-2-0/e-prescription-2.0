import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionPatients: {},
  collectionDoctors: {},
  collectionMyPatients: {},
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchDoctors: (state, action) => {},
    fetchPatients: (state, action) => {},
    fetchMyPatients: (state, action) => {},

    setCollectionMyPatients: (state, action) => {
      const { search, collection, page, numberPages } = action.payload;

      if (state.collectionMyPatients?.[search]) {
        state.collectionMyPatients[search] = {
          ...state.collectionMyPatients[search],
          [page]: collection,
          numberPages,
        };
      } else {
        state.collectionMyPatients = {
          ...state.collectionMyPatients,
          [search]: { [page]: collection, numberPages },
        };
      }
    },

    setCollectionPatients: (state, action) => {
      const { search, collection, page, numberPages } = action.payload;

      if (state.collectionPatients?.[search]) {
        state.collectionPatients[search] = {
          ...state.collectionPatients[search],
          [page]: collection,
          numberPages,
        };
      } else {
        state.collectionPatients = {
          ...state.collectionPatients,
          [search]: { [page]: collection, numberPages },
        };
      }
    },

    setCollectionDoctors: (state, action) => {
      const { search, collection, page, numberPages } = action.payload;

      if (state.collectionDoctors?.[search]) {
        state.collectionDoctors[search] = {
          ...state.collectionDoctors[search],
          [page]: collection,
          numberPages,
        };
      } else {
        state.collectionDoctors = {
          ...state.collectionDoctors,
          [search]: { [page]: collection, numberPages },
        };
      }
    },
  },
});
