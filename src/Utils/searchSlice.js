import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: [],
    reducers: {
        cacheResults: (state, action) => {
            return { ...state, [action.payload.query]: action.payload.results };

        }
    }
})
export const { cacheResults } = searchSlice.actions
export default searchSlice.reducer