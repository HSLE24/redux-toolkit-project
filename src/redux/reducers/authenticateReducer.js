let initialState= {
    id: '',
    password: '',
    authenticate: false
}

function authenticateReducer(state=initialState, action){
    let {type, payload} = action;
    switch(type){
        case "LOGIN_SUCCESS":
            console.log("LOGIN_SUCCESS")
            return {...state, id:payload.id, password:payload.password, authenticate: true}
        case "LOGIN_STATE_CHANGE":
            return {...state, authenticate: payload.authenticate}

        default:
            return {...state}

    }

}

export default authenticateReducer;