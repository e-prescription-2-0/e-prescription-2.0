import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeLink: ""
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
        const currentActiveLink = action;
        state.activeLink = currentActiveLink.payload
    }
  },
})
