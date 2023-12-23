import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMyPrescriptions: [],
  openPrescription: {},
};

export const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    fetchMyPrescriptions: () => {},
    setMyPrescriptions: (state, action) => {
      state.allMyPrescriptions = [...action.payload];
    },
    setOpenPrescription: (state, action) => {
      state.openPrescription = action.payload;
    },
  },
});
