import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allMedicines: [],
}

export const medicinesSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {
    fetchMedicines: () => {},
    setMedicines: (state, action) => {
      state.allMedicines = [...action.payload]
    },
  },
})
