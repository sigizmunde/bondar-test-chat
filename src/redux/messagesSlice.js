import { createSlice } from "@reduxjs/toolkit";
import sortObjectsByDatetime from "../utils/sortObjectsByDatetime";

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
      try {
        const sorted = sortObjectsByDatetime(payload);
        state.items = sorted;
      } catch (err) {
        console.error(err);
        state.items = payload;
      }
    },
  },
});

export const { addMessage, removeMessage, overwriteMessages } =
  messagesSlice.actions;

export default messagesSlice.reducer;
