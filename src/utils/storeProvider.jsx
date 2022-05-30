import React, {useContext, useState} from "react";
import UserContext from "../contexts/userContext";
import BarberContext from "../contexts/barberContext";
import Barbers from "./dummyData";

export const useUsers = ()=> useContext(UserContext);
export const useBarbers = ()=> useContext(BarberContext);

const StoreProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    const [barbers,setBarbers] = useState(Barbers);

    return (
        <UserContext.Provider value={{users: users,setUsers:setUsers}} >
            <BarberContext.Provider value={{barbers: barbers,setBarbers:setBarbers}}>
                {children}
            </BarberContext.Provider>
        </UserContext.Provider>
    )
}

export default StoreProvider;