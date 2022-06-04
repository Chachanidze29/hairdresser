import {createContext} from "react";

export const authInitial = {
    email:'',
    password:'',
    orders:[]
}

const AuthUserContext = createContext({
    authUser:authInitial,
    setAuthUser:()=>{},
});

export default AuthUserContext;