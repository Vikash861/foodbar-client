import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseURL = 'https://foodbar-admin.onrender.com';
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

export const productSlice = createSlice({
    name: 'cart',
    initialState: {
        data: {},
        status: STATUSES.IDLE
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }
})


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    let allProducts = [];

    // const options = {
    //     method: 'GET',
    //     url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
    //     headers: {
    //         'X-RapidAPI-Key': '2642489498mshf996e578e01fd33p185460jsnb7a5dfe813ca',
    //         'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    //     }
    // };
    // const options2 = {
    //     method: 'GET',
    //     url: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
    //     headers: {
    //         'X-RapidAPI-Key': '2642489498mshf996e578e01fd33p185460jsnb7a5dfe813ca',
    //         'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    //     }
    // };

    try {
        const res = await axios(`${baseURL}/api/products`)
        allProducts = res.data.data;
    } catch (error) {
    }
    return allProducts;
})

export default productSlice.reducer;