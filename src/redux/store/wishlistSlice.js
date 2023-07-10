import { createSlice } from "@reduxjs/toolkit";
import { storeInLocalStorage, fetchFromLocalStorage } from "../../utils/helpers";

const initialState = {
    wishlistItems: fetchFromLocalStorage('wishlist'),
    totalWishItems: 0
    // isInWishlist: false
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const existingWishItem = state.wishlistItems.find(item => item.id === action.payload.id);

            if(!existingWishItem){
                state.wishlistItems.push(action.payload);
                storeInLocalStorage(state.wishlistItems, "wishlist");
            }
        },

        removeFromWishList: (state, action) => {
            const updatedWishlist = state.wishlistItems.filter(item => item.id !== action.payload);
            state.wishlistItems = updatedWishlist;
            storeInLocalStorage(state.wishlistItems, "wishlist");
        },

        clearWishList: (state, action) => {
            state.wishlistItems = [];
            storeInLocalStorage(state.wishlistItems, "wishlist");
        },

        getTotalWishItems: (state, action) => {
            state.totalWishItems = state.wishlistItems.length;
        }

        // searchInWishList: (state, action) => {
        //     let wishId = action.payload.replace(".json", "");
        //     state.isInWishlist = state.wishlistItems.find(item => item.id === wishId);
        // },
    }
});

export const { addToWishList, removeFromWishList, removeWishStatus, clearWishList, getTotalWishItems } = wishlistSlice.actions;
export default wishlistSlice.reducer;
export const selectWishListItems = (state) => state.wishlist.wishlistItems;
export const selectWishListCount= (state) => state.wishlist.totalWishItems;
// export const selectWishStatus = (state) => state.wishlist.isInWishlist;