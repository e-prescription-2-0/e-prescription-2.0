import { createSlice } from "@reduxjs/toolkit"

const storedUser = localStorage.getItem("authUser")

const initialState = {
  authUser: storedUser ? JSON.parse(storedUser) : null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchRegisteredUser: () => {},
    setAuthUser: (state, action) => {
      const {accessToken,...loggedUser} = action.payload
      if(accessToken) {
        localStorage.setItem("accessToken", JSON.stringify(accessToken));

      }
      localStorage.setItem("authUser", JSON.stringify(loggedUser));
      state.authUser = action.payload
    },
    fetchLoginUser: () => {},
    fetchLogoutUser: () => {},
    clearAuthUser(state) {
      localStorage.removeItem("authUser")
      localStorage.removeItem("accessToken")
      state.authUser = null
    },
  },
})

export const {
  
  setAuthUser,
  clearAuthUser,
  fetchRegisteredUser,
  fetchLoginUser,
  fetchLogoutUser,
} = authSlice.actions
