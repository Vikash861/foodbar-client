import { configureStore } from '@reduxjs/toolkit'
import cartRedcuer from './cartSlice.js'
import productReducer from './productSlice'
import paymentReducer from './paymentSlice'

export const store = configureStore({
    reducer: {
        cart : cartRedcuer,
        product : productReducer,
        payment : paymentReducer
    },
})

