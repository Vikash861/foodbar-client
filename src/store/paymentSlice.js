import { createSlice } from '@reduxjs/toolkit'

export const paymentSlice = createSlice({
    name: 'cart',
    initialState: {
        phone: '',
        address: '',
        price: ''
    },
    reducers: {
        add(state, action) {
            const { number, address, price } = action.payload
            state.phone = number
            state.address = address
            state.price = price
        },
        removeAll(state) {
            state.phone = '';
            state.address = '';
            state.price = '';
        }
    },
})

export const { add,removeAll } = paymentSlice.actions;

export default paymentSlice.reducer;