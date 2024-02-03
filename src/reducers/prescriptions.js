import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMyPrescriptions: [],
  prescription: {},
  loading: false,
  prescriptionsFilter: 'altogether'
};

export const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    fetchMyPrescriptions: () => {},
    setMyPrescriptions: (state, action) => {
      state.allMyPrescriptions = [...action.payload];
    },
    fetchPrescription: (state, action) => {},
    setPrescription: (state, action) => {
      state.prescription = action.payload;
    },
    completePrescription: () => {},
    fetchCreatePrescription: () => {},
    setCreatedPrescription: (state, action) => {
      state.allMyPrescriptions = [...state.allMyPrescriptions, action.payload];
    },
    deletePrescription: () => {},
    removeDeletedPrescription: (state, action) => {
      state.allMyPrescriptions = state.allMyPrescriptions.filter(
        (x) => x._id !== action.payload._id
      );
    },
    fetchActivePrescription: () => {},
    fetchCompletedPrescription: () => {},
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPrescriptionsFilter: (state, action) => {
      state.prescriptionsFilter = action.payload;
    },
  },
});
