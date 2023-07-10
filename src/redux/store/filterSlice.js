import { createSlice } from "@reduxjs/toolkit";
import { constants } from "../../constants/index";

const initialState = {
    tempProducts: [],
    filteredProducts: [],
    // gridView: true,
    sortBy: "",
    filterBy: {
        product_type: ""
    }
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTempProducts: (state, action) => {
            state.tempProducts = action.payload;
        },

        // setGridView: (state, action) => {
        //     state.gridView = true;
        // },

        // setListView: (state, action) => {
        //     state.gridView = false;
        // },

        sortProducts: (state, action) => {
            switch(action.payload){
                case constants.PRICE_LOW_TO_HIGH:
                    state.filteredProducts = state.filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    break;
                case constants.PRICE_HIGH_TO_LOW:
                    state.filteredProducts = state.filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                    break;
                case constants.NAME_A_Z:
                    state.filteredProducts = state.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case constants.NAME_Z_A:
                    state.filteredProducts = state.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default:
                    state.filteredProducts = state.tempProducts;
            }
        },

        filterProducts: (state, action) => {
            if(action.payload === constants.DEFAULT_FILTER){
                state.filteredProducts = state.tempProducts;
            } else {
                state.filteredProducts = state.tempProducts.filter(item => item.product_type === action.payload);
            }
        }
    }
});

export const { setTempProducts, updateSortValue, setGridView, setListView, sortProducts, filterProducts } = filterSlice.actions;
export default filterSlice.reducer;
export const selectTempProducts = (state) => state.filter.tempProducts;
export const selectGridView = (state) => state.filter.gridView;
export const selectSortBy = (state) => state.filter.sortBy;
export const selectFilteredProducts = (state) => state.filter.filteredProducts;