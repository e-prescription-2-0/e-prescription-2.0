import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionAllPatients: {},
  collectionDoctors: {},
  collectionMyPatients: {},
  collectionAllPrescriptions: {},
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchDoctors: (state, action) => {},
    fetchAllPatients: (state, action) => {},
    fetchMyPatients: (state, action) => {},
    fetchAllPrescriptions: (state, action) => {},

    setCollectionAllPrescriptions: (state, action) => {
      const { search, collection, page, numberPages } = action.payload;

      if (state.collectionAllPrescriptions?.[search]) {
        state.collectionAllPrescriptions[search] = {
          ...state.collectionAllPrescriptions[search],
          [page]: collection,
          numberPages,
        };
      } else {
        state.collectionAllPrescriptions = {
          ...state.collectionAllPrescriptions,
          [search]: { [page]: collection, numberPages },
        };
      }
    },

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

    setCollectionAllPatients: (state, action) => {
      const { search, collection, page, numberPages } = action.payload;

      if (state.collectionAllPatients?.[search]) {
        state.collectionAllPatients[search] = {
          ...state.collectionAllPatients[search],
          [page]: collection,
          numberPages,
        };
      } else {
        state.collectionAllPatients = {
          ...state.collectionAllPatients,
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
