import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload.id);
    },
    overwriteContacts: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { addContact, removeContact, overwriteContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
