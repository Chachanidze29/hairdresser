import React from "react";
import {useBarbers} from "../../utils/storeProvider";

const Home = ()=> {
    const {barbers} = useBarbers();
    const userEmail = localStorage.getItem('userEmail');

    return (
        <div>
            {
                barbers.map(barber => (
                    <div>
                        <p>{barber.firstName}</p>
                        <p>{barber.price}</p>
                        {
                            userEmail && <button>Details</button>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Home;