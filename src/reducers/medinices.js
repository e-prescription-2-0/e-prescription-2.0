import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  medicines: [],
}

export const medicinesSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {
    fetchMedicines: () => {},
    setMedicines: (state, action) => {
      state.medicines = [...action.payload]
    },
  },
})
