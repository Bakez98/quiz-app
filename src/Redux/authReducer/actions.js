import * as AUTH_ACTIONS_CONSTANTS from "./constants"
import magic from "../../lib/magic-sdk"


// magic.auth.loginWithMagicLink({ email });
// magic.user.getMetadata();
// magic.user.logout();
// magic.user.isLoggedIn();
// magic.user.getIdToken();

export  function login(email) {
    return async (dispatch) => {

        dispatch({
            type:AUTH_ACTIONS_CONSTANTS.AUTH_LOADING,
        });

        try {
            const  responce = await magic.auth.loginWithMagicLink({ email });
            if(responce){
                const Token = await magic.user.getIdToken();
                const userInformation = await magic.user.getMetadata();

                localStorage.setItem("Token", Token);
                localStorage.setItem("user", JSON.stringify(userInformation))


                dispatch({
                type:AUTH_ACTIONS_CONSTANTS.AUTH_SUCCESS,
                payload: {Token , userInformation}
                });


            }
        } catch (error) {
            
            dispatch({
                type:AUTH_ACTIONS_CONSTANTS.AUTH_ERROR,
                payload: error,
            })

        }









    }
}

export  function logout() {
    return async (dispatch) => {

        dispatch({
            type: AUTH_ACTIONS_CONSTANTS.AUTH_LOADING
        })

        try {
            const responce = await magic.user.logout();
            if(responce){
                localStorage.clear()
                dispatch({
                    type:AUTH_ACTIONS_CONSTANTS.AUTH_CLEAR,
                })
            }
            return true;
        } catch (error) {
            dispatch({
                type:AUTH_ACTIONS_CONSTANTS.AUTH_ERROR,
                payload: error,
            })
            return false;
        }

    }
}


export function validateToken() {
    return async (dispatch) => {

        dispatch({
            type: AUTH_ACTIONS_CONSTANTS.AUTH_LOADING
        })

        try {
            const responce = await magic.user.getIdToken();
            if(responce){
                dispatch({
                    type:AUTH_ACTIONS_CONSTANTS.AUTH_RESET_LOADING
                })
            }
            return true;
        } catch (error) {
            localStorage.clear();
            dispatch({
                type: AUTH_ACTIONS_CONSTANTS.AUTH_CLEAR,
            })
            return false;
        }
    }
}