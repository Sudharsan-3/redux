import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchToys = createAsyncThunk('toys/fetchToys', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
});

const toySlice = createSlice({
  name: 'toys',
  initialState: {
    toys: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToys.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchToys.fulfilled, (state, action) => {
        state.loading = false;
        state.toys = action.payload;
      })
      .addCase(fetchToys.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong!';
      });
  },
});

export default toySlice.reducer;
