import {createAction} from 'redux-actions'

export const AuthActionEnums = {
    logIn: "LOGIN",
    register: "REGISTER",
    logOut: "LOGOUT"
}

export const loginUserAction = createAction(AuthActionEnums.logIn, (data)=>({data}));
export const registerUserAction = createAction(AuthActionEnums.register, (username, sex, email, password) =>(
    {
        username,
        sex,
        email,
        password
    }
))
export const logOutUserAction = createAction(AuthActionEnums.logOut)