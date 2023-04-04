import * as QUIZ_CONSTANTS from "./constants"


const initState = {
    Questions:[],
    loading: false,
    error:null
}


export function QuizReducer(state= initState, action){
    switch (action.type) {
        case QUIZ_CONSTANTS.FETCH_LOADING:
            return{
                ...state,
                loading: true
            }
        case QUIZ_CONSTANTS.FETCH_ERROR:
            return{
                ...state,
                error:action.payload,
            }

        case QUIZ_CONSTANTS.FETCH_QUIZ_QUESTIONS:
            return{
                ...state,
                loading:false,
                Questions:action.payload
            }
            
    
        default:
            state;
    }

}