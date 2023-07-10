import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosapi from "../../api/axios";
import { apiURL } from "../../constants";

export const fetchAsyncSearchedProducts = createAsyncThunk('products/search/fetch', async(searchTerm) => {
    const { data } = await axiosapi.get(`${apiURL.PRODUCTS_ALL}?brand=${searchTerm}`);
    console.log(data);
    return data;
});