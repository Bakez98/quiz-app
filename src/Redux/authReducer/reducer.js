import * as AUTH_ACTIONS_CONSTANTS from "./constants"

const initState = {
    isAuth:!!localStorage.getItem("Token") || false,
    token:null,
    loading:false,
    user:JSON.parse(localStorage.getItem("user")) || {},
    error: null,
}


 function authReducer(state = initState, action){
    switch (action.type) {
        case AUTH_ACTIONS_CONSTANTS.AUTH_LOADING:
        return {
            ...state,
            loading:true,
        }
        case AUTH_ACTIONS_CONSTANTS.AUTH_ERROR:
        return {
            ...state,
            loading:false,
            error: action.payload,
        }
        case AUTH_ACTIONS_CONSTANTS.AUTH_SUCCESS:
        return {
            ...state,
            loading:false,
            isAuth:true,
            // user:,
            //tokem:
        }
        case AUTH_ACTIONS_CONSTANTS.AUTH_CLEAR:
        return {
            ...state,
            loading: false,
            isAuth : false,
            token:"",
            user:{},
        }
        case AUTH_ACTIONS_CONSTANTS.AUTH_RESET_LOADING:
        return {
            ...state,
            loading: false,
        }
        default:
            return state;
    }
}

export default authReducer;