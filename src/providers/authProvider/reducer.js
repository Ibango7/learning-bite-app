import {handleActions } from "redux-actions";
import { AuthActionEnums } from "./actions";

export const authReducer = handleActions({
    [AuthActionEnums.logIn]:(state, action) => {
        // Login user
        console.log("New login trigger");
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
        // register user and logs uer in
        console.log("New user state trigger");
        return {
            ...state,
            isLoggedIn:true,
            ...action.payload
        }
    }
},
{authenticated: false}
    
);