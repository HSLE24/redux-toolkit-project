function getProducts(searchQuery){
    return async (dispatch, getState)=>{
        try{
            let url = `https://my-json-server.typicode.com/HSLE24/hnm-test/products?q=${searchQuery}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            //setProductList(data);

            dispatch({type: "GET_PRODUCT_SUCESS", payload: {data}})
          }
          catch{
            console.log("불러오기 실패")
          }
    }
}

function getProductDetail(id){
    return async (dispatch, getState)=>{
        try{
            let url = `https://my-json-server.typicode.com/HSLE24/hnm-test/products/${id}`
            const response = await fetch(url);
            const data = await response.json();
            dispatch({type: "GET_DETAIL_SUCESS", payload: {data}})
        }
        catch{
            console.log("실패 실패")
        }
    }
}

export const productAction={getProducts, getProductDetail}