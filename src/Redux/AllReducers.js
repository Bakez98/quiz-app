import { combineReducers } from "redux";
import QuizReducer from "./quizReducer/reducer"
import authReducer from "./authReducer/reducer"

const AllReducers = combineReducers({
    QuizReducer,
    authReducer
 })

export default AllReducers;