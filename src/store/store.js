import { configureStore } from "@reduxjs/toolkit";
import basketsReducer from './basketsSlice'

export const store = configureStore({
    reducer: {
        baskets: basketsReducer,
    }
})