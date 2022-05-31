import React from "react";
import {useBarbers} from "../../utils/storeProvider";
import { useNavigate } from 'react-router-dom';

const Home = ()=> {
    const {barbers} = useBarbers();
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center'>
            {
                barbers.map(barber => (
                    <div key={barber.email} className='flex border-2 m-2 p-3 hover:bg-blue-100 border-blue-300 w-full items-center justify-between'>
                        <div className={'flex flex-col items-center justify-between'}>
                            <p>{barber.firstName} {barber.lastName}</p>
                            <p>${barber.price}</p>
                        </div>
                        {
                            <button onClick={()=>navigate(navigate(`/home/${barber.id}`))} className='bg-blue-500 border-2 text-white rounded p-3 m-2 hover:bg-transparent hover:text-blue-500 hover:border-blue-500'>Details</button>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Home;