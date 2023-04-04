import * as QUIZ_CONSTANTS from "./constants"


// i can send the quiz catagory from the place i dispatch the function
// or i can just fetch all the questions for the quiz and in each page i can place a condetion inside the map() to pick based on the catagory



export function FetchQuestions(catagory) {
    return async (dispatch) => {

        dispatch({
            type:QUIZ_CONSTANTS.FETCH_LOADING
        })

        try {
            const res = await fetch("http://localhost:7000/biology_questions")
            const Fetched_Questions = await res.json()

            dispatch({
                type:QUIZ_CONSTANTS.FETCH_QUIZ_QUESTIONS,
                payload:Fetched_Questions,
            })
            
        } catch (error) {
            dispatch({
                type:QUIZ_CONSTANTS.FETCH_ERROR,
                payload:error,
            })
        }

    }
}