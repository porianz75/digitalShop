import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../axios";


const initialState = {
    baskets: [],
    loading: false,
    error: null,
    total_count: 0,
    total_price: 0,
    total_off: 0
}

export const fetchBaskets = createAsyncThunk('baskets/fetchBaskets', (basketToken) => {
    return axios
        .get(`/baskets/${basketToken}.json`)
        .then(response => response.data)
})

export const updateBaskets = createAsyncThunk('baskets/updateBaskets', async (data) => {
    if (localStorage.BasketToken) {
        return axios.put(`/baskets/${localStorage.BasketToken}.json`, data).then(response => data)
    } else {
        return axios.post('/baskets.json', data).then(response => {
            console.log(response)
            localStorage.BasketToken = response.data.name
            return data
        })
    }
})

const CalculationOfBasketInfo =(baskets)=>{
    let totalCount = 0;
    let totalPriceWithoutOff = 0;
    let totalPriceWithOff = 0;

    baskets.forEach(basket => {
        totalCount += basket.count;
        totalPriceWithoutOff += basket.count * basket.selling_price;
        totalPriceWithOff += basket.count * basket.rrp_price;
    })
    return {totalCount,totalPriceWithoutOff,totalPriceWithOff}
}

const basketsSlice = createSlice({
    name: 'baskets',
    initialState,
    extraReducers(builder) {
//start fetch baskets
        builder.addCase(fetchBaskets.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchBaskets.fulfilled, (state, action) => {
            if (!action.payload) {
                state.loading = false;
                state.error = '';
                return;
            }

            let moreInfo = CalculationOfBasketInfo(action.payload);

            state.loading = false;
            state.baskets = action.payload;
            state.error = '';
            state.total_count = moreInfo.totalCount;
            state.total_price = moreInfo.totalPriceWithOff;
            state.total_off = moreInfo.totalPriceWithoutOff - moreInfo.totalPriceWithOff;
        })
        builder.addCase(fetchBaskets.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        })
//end fetch baskets

 // start update baskets
        builder.addCase(updateBaskets.fulfilled, (state, action) => {
            let moreInfo = CalculationOfBasketInfo(action.payload)

            state.loading = false;
            state.baskets = action.payload;
            state.error = '';
            state.total_count = moreInfo.totalCount;
            state.total_price = moreInfo.totalPriceWithOff;
            state.total_off = moreInfo.totalPriceWithoutOff - moreInfo.totalPriceWithOff;
        })

// end update baskets
    }
})

export const getProductByIdFromBaskets = (state, productId) =>
    state.baskets.baskets.find(basket => basket.id === productId);

export const getAllBaskets = (state) => state.baskets.baskets;
export const getBasketLoading = (state) => state.baskets.loading;
export const getBasketError = (state) => state.baskets.error;
export const getBasketCount = (state) => state.baskets.count;

export const getBasketsState = (state) => state.baskets;

export default basketsSlice.reducer