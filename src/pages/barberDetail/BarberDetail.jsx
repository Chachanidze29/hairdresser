import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useBarbers} from "../../utils/storeProvider";

const BarberDetail = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    const {id} = useParams();
    const {barbers} = useBarbers();
    const navigate = useNavigate();
    const barber = barbers.filter(barber=>barber.id == id)[0];

    useEffect(()=>{
        if(!authUser) {
            navigate('/');
        }
    },[authUser, navigate])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col border-2 m-2 p-3 border-blue-300 w-full items-center justify-between'>
                <img className='hover:brightness-75' src={'https://www.betterteam.com/images/barber-job-description-5184x3456-20201124.jpeg?crop=40:21,smart&width=1200&dpr=2'} />
                <p>{barber.firstName}</p>
                <p>{barber.lastName}</p>
                <p>{barber.email}</p>
                <p>{barber.phone}</p>
                <p>{barber.price}</p>
                <p>{barber.address}</p>
            </div>
        </div>
    )
}

export default BarberDetail;