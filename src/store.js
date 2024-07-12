import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";
import productsReducer from "./Slices/productsSlice";
import cartReducer from './Slices/cartSlice'

const combinedReducer = combineReducers({
    products : productsReducer,
    cart : cartReducer
})

const persistConfig = {
    key : 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig,combinedReducer);

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);

export default store