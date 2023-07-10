import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncTypeProducts } from "../actions/typeActions";

const initialState = {
    typeProducts: [],
    typeProductsStatus: STATUS.IDLE
}

const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncTypeProducts.pending, (state, action) => {
            state.typeProductsStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncTypeProducts.fulfilled, (state, action) => {
            state.typeProducts = action.payload;
            state.typeProductsStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncTypeProducts.rejected, (state, action) => {
            state.typeProductsStatus = STATUS.FAILED;
        })
    }
});

export const getTypeProducts = (state) => state.type.typeProducts;
export const getTypeProductsStatus = (state) => state.type.typeProductsStatus;

export default typeSlice.reducer;