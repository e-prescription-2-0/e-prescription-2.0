import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  messages: { type: "", text: "" },
  isMessage: false,
}

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload
      state.isMessage = true
    },
    clearMessages: (state, action) => {
      state.messages = { type: "", text: "" }
      state.isMessage = false
    },
  },
})

export const { clearMessages, setMessages } = messagesSlice.actions
