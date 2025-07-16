import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchToys = createAsyncThunk('toys/fetchToys', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
});

const toySlice = createSlice({
  name: 'toys',
  initialState: {
    toys: [],
    originalToys: [],
    loading: false,
    error: null,
    sortType: 'none', // Track sorting
  },
  reducers: {
    sortAscending: (state) => {
      state.toys.sort((a, b) => a.title.localeCompare(b.title));
      state.sortType = 'asc';
    },
    sortDescending: (state) => {
      state.toys.sort((a, b) => b.title.localeCompare(a.title));
      state.sortType = 'desc';
    },
    clearSort: (state) => {
      state.toys = [...state.originalToys];
      state.sortType = 'none';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToys.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchToys.fulfilled, (state, action) => {
        state.loading = false;
        state.originalToys = action.payload;

        // Re-apply saved sort type
        if (state.sortType === 'asc') {
          state.toys = [...action.payload].sort((a, b) => a.title.localeCompare(b.title));
        } else if (state.sortType === 'desc') {
          state.toys = [...action.payload].sort((a, b) => b.title.localeCompare(a.title));
        } else {
          state.toys = action.payload;
        }
      })
      .addCase(fetchToys.rejected, (state) => {
        state.loading = false;
        state.error = 'Something went wrong!';
      });
  },
});

export const { sortAscending, sortDescending, clearSort } = toySlice.actions;
export default toySlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchToys = createAsyncThunk('toys/fetchToys', async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return await res.json();
// });

// const toySlice = createSlice({
//   name: 'toys',
//   initialState: {
//     toys: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchToys.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchToys.fulfilled, (state, action) => {
//         state.loading = false;
//         state.toys = action.payload;
//       })
//       .addCase(fetchToys.rejected, (state) => {
//         state.loading = false;
//         state.error = 'Something went wrong!';
//       });
//   },
// });

// export default toySlice.reducer;
