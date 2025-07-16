import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchToys = createAsyncThunk("toys/fetchToys", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await res.json();
}

)
const toySlice = createSlice({
    name: "toys",
    initialState: {
        toys: [],
        originalToys: [],
        loading: false,
        error: null,
        sortType: "none",
        searchQuery: "",

    },
    reducers: {
        sortAscending: (state) => {
            state.toys.sort((a, b) => a.title.localeCompare(b.title))
            state.sortType = "asc"

        },
        sortDescending: (state) => {
            state.toys.sort((a, b) => b.title.localeCompare(a.title))
            state.sortType = "desc"
        },
        clearSort: (state) => {
            state.toys = [...state.originalToys]
            state.sortType = "none"
        },
        searchToyQuery: (state, action) => {
            const searchData = action.payload.toLowerCase();
            state.searchQuery = action.payload
            state.toys = state.originalToys.filter((toy) =>
                toy.title.toLowerCase().includes(searchData)
            );
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchToys.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchToys.fulfilled, (state, action) => {
                state.loading = false;
                state.originalToys = action.payload;
              
                
                let filtered = action.payload;
                if (state.searchQuery) {
                  filtered = filtered.filter((toy) =>
                    toy.title.toLowerCase().includes(state.searchQuery.toLowerCase())
                  );
                }
              
                
                if (state.sortType === "asc") {
                    state.toys = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
                  } else if (state.sortType === "desc") {
                    state.toys = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
                  } else {
                    state.toys = filtered; 
                  }
              })
              

            .addCase(fetchToys.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            })



    }
})

export const { sortAscending, sortDescending, clearSort, searchToyQuery } = toySlice.actions;

export default toySlice.reducer
