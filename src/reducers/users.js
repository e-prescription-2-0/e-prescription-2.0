import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
  profile: {},
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchProfile: (state, action) => {},
    fetchPatientProfile: (state, action) => {},
    fetchSetToPatientList: (state, action) => {},
    fetchRemoveFromPatientList: (state, action) => {},
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }

  },
});
