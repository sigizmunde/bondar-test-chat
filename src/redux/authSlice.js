import { createSlice } from "@reduxjs/toolkit";
import { authReject, authRequest, authSuccess } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isLoading: false, error: null },
  reducers: {
    removeUser(state, { payload }) {
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

export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const getIsLoading = (state) => state.auth.isLoading;
export const getError = (state) => state.auth.error;
