import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncCategoryProducts } from "../actions/categoryActions";

const initialState = {
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncCategoryProducts.pending, (state, action) => {
            state.categoryProductsStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncCategoryProducts.fulfilled, (state, action) => {
            state.categoryProducts = action.payload;
            state.categoryProductsStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncCategoryProducts.rejected, (state, action) => {
            state.categoryProductsStatus = STATUS.FAILED;
        })
    }
});

export const selectCategoryProducts = (state) => state.category.categoryProducts;
export const selectCategoryProductsStatus = (state) => state.category.categoryProductsStatus;

export default categorySlice.reducer;