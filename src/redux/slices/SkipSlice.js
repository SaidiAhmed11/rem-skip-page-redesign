import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  skips: [],
  selectedSkip: {},
  loading: false,
  error: null,
};

// 📦 Thunk to fetch skips from API based on postcode + area
// We use createAsyncThunk to keep API logic out of components
export const fetchSkips = createAsyncThunk('skips/fetchSkips', async ({ postcode, area }) => {
  const response = await axios.get(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
  );
  return response.data; // This gets passed to .fulfilled reducer below
});

const skipSlice = createSlice({
  name: 'skips',
  initialState,
  reducers: {
    // Manually set skips (not used with fetchSkips but useful to keep)
    setSkips: (state, action) => {
      state.skips = action.payload;
    },

    // Manually toggle loading state (if needed somewhere custom)
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Save the skip selected by the user
    selectSkip: (state, action) => {
      state.selectedSkip = action.payload;
    },

    // Reset the selected skip
    unselectSkip: (state) => {
      state.selectedSkip = null;
    },

    // Manually set an error message
    setError: (state, action) => {
      state.error = action.payload;
    },
  },

  // 🌀 Handle async logic results from fetchSkips
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkips.pending, (state) => {
        state.loading = true; // Show loader while we wait
        state.error = null; // Clear previous error
      })
      .addCase(fetchSkips.fulfilled, (state, action) => {
        state.loading = false;
        state.skips = action.payload;
      })
      .addCase(fetchSkips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load skips.';
      });
  },
});

// 🧪 Export actions and reducer
export const { setSkips, setLoading, selectSkip, unselectSkip, setError } = skipSlice.actions;

export default skipSlice.reducer;
