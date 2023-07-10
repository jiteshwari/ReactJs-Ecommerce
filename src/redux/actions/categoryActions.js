import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../constants";
import axiosapi from "../../api/axios";

export const fetchAsyncCategoryProducts = createAsyncThunk('category-products/fetch', async(category_name) => {
    const { data } = await axiosapi.get(`${apiURL.PRODUCTS_ALL}?product_category=${category_name}`);
    return data;
});
