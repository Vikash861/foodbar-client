import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item._id !== action.payload)
        },
        updateQnt(state, action) {
            const { _id, quantity } = action.payload;
            state.forEach((item) => {
                if (item._id === _id) {
                    item.qnt = quantity;
                }
            })
        },
        addAll(state, action) {
            return action.payload
        },

        removeAll(state) {
            return [];
        },
    },
})

export const { add, remove, updateQnt, addAll,removeAll } = cartSlice.actions;

export default cartSlice.reducer;