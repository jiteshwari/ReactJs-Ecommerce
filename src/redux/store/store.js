import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import categoryReducer from "./categorySlice";
import filterReducer from "./filterSlice";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";
import sidebarReducer from "./sidebarSlice";
import typeReducer from "./typeSlice";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./authSlice";
import { authApi } from "../../services/auth/authService.js";

const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        sidebar: sidebarReducer,
        basket: basketReducer,
        type: typeReducer,
        wishlist: wishlistReducer,
        search: searchReducer,
        filter: filterReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

// The thunk middleware was automatically added