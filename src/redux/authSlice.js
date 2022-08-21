import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { authReject, authRequest, authSuccess } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isLoading: false, error: null },
  reducers: {
    removeUser: (state, { payload }) => {
      signOut(auth)
        // .then((response) => console.log(response))
        .catch((err) => console.warn(err));
      return { ...state, user: null, token: null };
    },
  },
  extraReducers: {
    [authRequest]: (state, action) => {
      state.isloading = true;
    },
    [authSuccess]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isloading = false;
    },
    [authReject]: (state, action) => {
      state.error = action.payload;
      state.isloading = false;
    },
  },
});

export const { removeUser } = authSlice.actions;

export default authSlice.reducer;
