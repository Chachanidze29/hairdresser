import {createContext} from "react";

const BarberContext = createContext({
    barbers:[],
    setBarbers:()=>{}
});

export default BarberContext;