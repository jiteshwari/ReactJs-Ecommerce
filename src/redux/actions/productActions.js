import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../constants/index";
import axiosapi from "../../api/axios";

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async() => {
    const { data } = await axiosapi.get(`${apiURL.PRODUCTS_ALL}`);
    return data;
});

export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async(id) => {
    const { data } = await axiosapi.get(`${apiURL.PRODUCT_SINGLE}/${id}`);
    return data;
});

