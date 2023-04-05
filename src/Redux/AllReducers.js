import { combineReducers } from "redux";
import QuizReducer from "./quizReducer/reducer"


const AllReducers = combineReducers({
    QuizReducer,
 })

export default AllReducers;