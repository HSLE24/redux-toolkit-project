import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
    productList: [],
    prodDetail: [],
    isLoading: false,
    error: null
}

export const getProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/HSLE24/hnm-test/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }catch(error){
        thunkApi.rejectWithValue(error.message)
    }
})

export const getProductDetail = createAsyncThunk('productdetail/fetchAll', async (id, thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/HSLE24/hnm-test/products/${id}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        thunkApi.rejectWithValue(error.message)
    }
})

// function productReducer(state=initialState, action){
//     let {type, payload} = action
//     switch(type){
//         case "GET_PRODUCT_SUCESS":
//             return {...state, productList: payload.data};
//         case "GET_DETAIL_SUCESS":
//             return {...state, prodDetail: payload.data};
//         default: 
//             return {...state};
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // getAllProducts(state, action){
        //     console.log("getAllProducts")
        //    state.productList = action.payload.data
        // },
        // getProductDetail(state, action){
        //     state.prodDetail = action.payload.data
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.productList = action.payload
            state.isLoading = false;
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(getProductDetail.pending, (state)=>{
            state.isLoading = true;
        })
       .addCase(getProductDetail.fulfilled, (state, action)=>{
            state.prodDetail = action.payload
            state.isLoading = false;
        })
        .addCase(getProductDetail.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});

export const productActions = productSlice.actions
export default productSlice.reducer