import React, {useContext, useState} from "react";
import {AuthUserContext, BarberContext, ReviewContext, UserContext} from "../contexts";
import Barbers from "./dummyData";
import {authInitial} from "../contexts/authUserContext";

export const useUsers = ()=> useContext(UserContext);
export const useBarbers = ()=> useContext(BarberContext);
export const useAuthUser = ()=> useContext(AuthUserContext);
export const useReviews = ()=> useContext(ReviewContext);

const StoreProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    const [barbers,setBarbers] = useState(Barbers);
    const [authUser,setAuthUser] = useState(authInitial);
    const [reviews,setReviews] = useState([]);

    return (
        <UserContext.Provider value={{users: users,setUsers:setUsers}} >
            <BarberContext.Provider value={{barbers: barbers,setBarbers:setBarbers}}>
                <AuthUserContext.Provider value={{authUser: authUser,setAuthUser:setAuthUser}}>
                    <ReviewContext.Provider value={{reviews: reviews,setReviews:setReviews}}>
                        {children}
                    </ReviewContext.Provider>
                </AuthUserContext.Provider>
            </BarberContext.Provider>
        </UserContext.Provider>
    )
}

export default StoreProvider;