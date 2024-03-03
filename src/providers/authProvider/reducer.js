import {handleActions } from "redux-actions";
import { AuthActionEnums } from "./actions";

export const authReducer = handleActions({
    [AuthActionEnums.logIn]:(state, action) => {
        return {
            ...state,
            isLoggedIn:true,
            ...action.payload
            }
    },
    [AuthActionEnums.logOut]:(state, action) => {
        // log out user
    },
    [AuthActionEnums.register]:(state, action) =>{
        // register user
    }
},
{authenticated: false}
    
);