import { createSlice } from "@reduxjs/toolkit";
import { storeInLocalStorage, fetchFromLocalStorage } from "../../utils/helpers";

const initialState = {
    basketItems: fetchFromLocalStorage('basket'),
    totalPrice: 0,
    totalItems: 0,
    wishlist: fetchFromLocalStorage('wishlist'),
}

const basketSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let { id, quantity } = action.payload;
            const existingProduct = state.basketItems.find(item => item.id === id);

            if(existingProduct){
                let updatedProduct = state.basketItems.map(item => {
                    if(item.id === id){
                        let tempQty = item.quantity + quantity;
                        let tempAmount = tempQty * item.price;

                        return {
                            ...item,
                            quantity: tempQty,
                            amount: tempAmount.toFixed(2),
                        }
                    }
                    return item;
                });

                state.basketItems = updatedProduct;
                storeInLocalStorage(state.basketItems, "basket");
            } else {
                state.basketItems.push(action.payload);
                storeInLocalStorage(state.basketItems, "basket");
            }
        },

        removeItem: (state, action) => {
            console.log(action.payload);
            const updatedProduct = state.basketItems.filter(item => item.id !== action.payload);
            state.basketItems = updatedProduct;
            storeInLocalStorage(state.basketItems, "basket");
            basketItemPriceTotal();
        },

        clearBasket: (state, action) => {
            state.basketItems = [];
            storeInLocalStorage(state.basketItems, "basket");
        },

        toggleItemQty: (state, action) => {
            let { id, toggleType } = action.payload;

            const updatedProduct = state.basketItems.map(item => {
                if(item.id === id){
                    let tempQty = item.quantity;
                    let tempAmount = item.amount;

                    if(toggleType === "INCREASE"){
                        tempQty++;
                        if(tempQty >= 100) tempQty = 100;
                        tempAmount = (tempQty * item.price).toFixed(2);
                    }

                    if(toggleType === "DECREASE"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempAmount = (tempQty * item.price).toFixed(2);
                    }

                    return {
                        ...item,
                        quantity: tempQty,
                        amount: tempAmount
                    }
                } else {
                    return item;
                }
            });

            state.basketItems = updatedProduct;
            storeInLocalStorage(state.basketItems, "basket");
        },

        basketItemPriceTotal: (state, action) => {
            let tempTotalPrice = state.basketItems.reduce((total, item) => {
                return total += parseFloat(item.amount);
            }, 0);
            state.totalPrice = tempTotalPrice;
            state.totalItems = state.basketItems.length;
        },
    }
});

export const {
    addItem,
    removeItem,
    clearBasket,
    resetBasket,
    toggleItemQty,
    basketItemPriceTotal,
} = basketSlice.actions;

export default basketSlice.reducer;

export const selectBasketItems = (state) => state.basket.basketItems;
export const selectBasketTotal = (state) => state.basket.totalPrice;
export const selectBasketCount = (state) => state.basket.totalItems; 