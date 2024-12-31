import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "da0e5fcfb0c0590c9d089902c913510e";

export const Fetchweather = createAsyncThunk(
  "weather/fetchweather",
  async (city) => {
    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetchweather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(Fetchweather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(Fetchweather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
