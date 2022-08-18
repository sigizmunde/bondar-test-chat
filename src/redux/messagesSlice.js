import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.items.push(payload);
    },
    removeMessage: (state, { payload }) => {
      state.items = state.items.filter(
        ({ contact_id, datetime }) =>
          contact_id !== payload.contact_id || datetime !== payload.datetime
      );
    },
    overwriteMessages: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { addMessage, removeMessage, overwriteMessages } =
  messagesSlice.actions;

export default messagesSlice.reducer;

export const getMessages = (state) => state.messages.items;
