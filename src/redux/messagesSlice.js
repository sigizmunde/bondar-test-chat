import { createSlice } from "@reduxjs/toolkit";
import sortMessages from "../utils/sortMessages";

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
        const sorted = sortMessages(payload);
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

export const getMessages = (state) => state.messages.items;
