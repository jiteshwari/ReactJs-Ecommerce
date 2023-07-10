import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncSearchedProducts } from "../actions/searchActions";

const initialState = {
    searchResult: [],
    searchStatus: STATUS.IDLE,
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncSearchedProducts.pending, (state, action) => {
            state.searchStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncSearchedProducts.fulfilled, (state, action) => {
            state.searchResult = action.payload;
            state.searchStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncSearchedProducts.rejected, (state, action) => {
            state.searchStatus = STATUS.FAILED;
        })
    }
});

export const getSearchResult = (state) => state.search.searchResult;
export const getSearchStatus = (state) => state.search.searchStatus;

export default searchSlice.reducer;