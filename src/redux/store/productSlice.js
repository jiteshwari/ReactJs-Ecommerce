import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncProducts, fetchAsyncProductSingle } from "../actions/productActions";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE
}

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAILED;
        })

        builder.addCase(fetchAsyncProductSingle.pending, (state, action) => {
            state.productSingleStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
            state.productSingle = action.payload;
            state.productSingleStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncProductSingle.rejected, (state, action) => {
            state.productSingleStatus = STATUS.FAILED;
        })
    }
});

export const selectAllProducts = (state) => state.product.products;
export const selectAllProductsStatus = (state) => state.product.productsStatus;
export const selectSingleProduct = (state) => state.product.productSingle;
export const selectSingleProductStatus = (state) => state.product.productSingleStatus;

export default productsSlice.reducer;