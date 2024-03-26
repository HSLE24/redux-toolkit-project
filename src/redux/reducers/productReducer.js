let initialState = {
    productList: [],
    prodDetail: []
}

function productReducer(state=initialState, action){
    let {type, payload} = action
    switch(type){
        case "GET_PRODUCT_SUCESS":
            return {...state, productList: payload.data};
        case "GET_DETAIL_SUCESS":
            return {...state, prodDetail: payload.data};
        default: 
            return {...state};
    }
}

export default productReducer;