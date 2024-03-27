import authenticateReducer from "./reducers/authenticateReducer";
import productSlice from "./slice/productSlice";


import { configureStore } from '@reduxjs/toolkit';

//let store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productSlice
    }
});

export default store;