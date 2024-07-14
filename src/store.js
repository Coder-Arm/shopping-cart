import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";
import cartReducer from './Slices/cartSlice'
import productsApi from "./Slices/productsApiSlice";

const combinedReducer = combineReducers({
    [productsApi.reducerPath] : productsApi.reducer,
    cart : cartReducer
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig,combinedReducer);

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(productsApi.middleware)
})

export const persistor = persistStore(store);

export default store