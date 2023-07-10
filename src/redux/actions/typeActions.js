import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiURL } from "../../constants";
import axiosapi from "../../api/axios";

export const fetchAsyncTypeProducts = createAsyncThunk('type/products/fetch', async(product_type) => {
    const { data } = await axiosapi.get(`${apiURL.PRODUCTS_ALL}?product_type=${product_type}`);
    return data;
});