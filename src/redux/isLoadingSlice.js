import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setLoading: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
