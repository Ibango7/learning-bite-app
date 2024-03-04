import {useContext, useReducer, useEffect } from "react";
import { AuthContext } from "../contexts/Contexts";
import { authReducer } from "./reducer";
import { loginUserAction, registerUserAction, logOutUserAction } from "./actions";
import axios from "axios";



// initial state of user
const initialState = {
    isLoggedIn:false,
    user:null
};

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(()=>{
       
    },[]);

    const registerUser = async (user) =>{
        try {
            const response =  await axios.post('https://localhost:7186/api/Users/Register',user);
            // console.log("Staus",response);
            // check if response was ok
            if(response.status === 201){
                // console.log("For registration",response.data);

                dispatch(registerUserAction(response.data));
                // localStorage.setItem("isLoggedIn", true);
                localStorage.setItem('user', JSON.stringify(response.data));
                return response.data;
            } else {
                throw new Error('Register failed');
            }

        } catch (error){
            // Handle any errors and re-throw
            console.log('Error registering in:', error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
            // Rethrow the error to propagate it further
            console.log('An error occurred while refistering user. Please try again later.');
            // message to the user
            throw error;
        }
    }

    const logOutUser = async () =>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        dispatch(logOutUserAction({}))
    }



    const loginUser = async (user) => {
        try {
            const response = await axios.post('https://localhost:7186/api/Users/login', user);
            // Check if response is OK (status code 200)
            if (response.status === 200) {
                // Dispatch action to update state with user data
                dispatch(loginUserAction(response.data));
                // localStorage.setItem("isLoggedIn", true);
                localStorage.setItem('user', JSON.stringify(response.data));
                // Return the parsed data or any other necessary information
                return response.data;
            } else {
                // If the response is not OK, throw an error
                throw new Error('Login failed');
            }
        } catch (error) {
            // Handle any errors and re-throw
            console.error('Error logging in:', error);
            console.error('An error occurred while logging in. Please try again later.');
            // message to the user
            throw error;
        }
    };
    
    return (
        <AuthContext.Provider value= {{state, loginUser, registerUser, logOutUser}} >
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuthState = () =>{
    const context = useContext(AuthContext);
    if(context === undefined){
        // throw new Error("")
        console.log("Undefined/ useAuth must be used within a AuthProvider only")
    }
    return context;
}

export { AuthProvider, useAuthState};