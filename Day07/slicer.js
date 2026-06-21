import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk(
  "Coin/fetch",
  async (args = 100, thunkAPI) => {
    try {
      const randomPage =
        Math.floor(Math.random() * 20) + 1;

      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=${args}&page=${randomPage}`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch coin data"
        );
      }

      const data = await response.json();

      return data
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message
      );
    }
  }
);

const slicer1 = createSlice({
  name: "slice1",

  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(FetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        FetchData.fulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload;
        }
      )

      .addCase(
        FetchData.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default slicer1.reducer;