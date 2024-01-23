import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
  profile: {},
  loading: true,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchProfile: (state, action) => {},
    fetchPatientProfile: (state, action) => {},
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
