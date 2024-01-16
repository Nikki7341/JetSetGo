/* eslint-disable prettier/prettier */
// features/apiSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataItem, DataState } from "./DataTypes";

export const fetchData = createAsyncThunk<DataItem[]>(
  "data/fetchData",
  async () => {
    const response = await fetch("https://api.npoint.io/4829d4ab0e96bfab50e7");
    const data = await response.json();
    return data;
  }
);

const initialState: DataState = {
  items: [],
  status: "idle",
  error: null,
};

const apiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
