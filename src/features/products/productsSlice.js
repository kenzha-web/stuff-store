import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../components/utils/constants";

export const getProducts = createAsyncThunk("/products/getProducts", async(_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products`);
        return res.data;
    } catch(error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        filtered: [],
        related: [],
        isLoading: false
    },
    reducers: {
        filterByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(({price}) => price < payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export const {filterByPrice} = productsSlice.actions
export default productsSlice.reducer;