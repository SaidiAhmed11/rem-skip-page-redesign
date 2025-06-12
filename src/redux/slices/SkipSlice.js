import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skips: [],
  selectedSkip: {},
  loading: false,
  error: null,
};

const skipSlice = createSlice({
  name: 'skip',
  initialState,
  reducers: {
    setSkips: (state, action) => {
      state.skips = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    selectSkip(state, action) {
      state.selectedSkip = action.payload;
    },
    unselectSkip(state) {
      state.selectedSkip = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSkips, setLoading, selectSkip, unselectSkip, setError } = skipSlice.actions;
export default skipSlice.reducer;
