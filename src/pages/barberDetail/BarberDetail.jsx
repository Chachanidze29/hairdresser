import React, {useState} from "react";
import { useParams} from "react-router-dom";
import {useAuthUser, useBarbers, useReviews} from "../../utils/storeProvider";
import {FormContainer, Input, SubmitButton} from "../../components";

const BarberDetail = () => {
    const {id} = useParams();
    const {barbers} = useBarbers();
    const barber = barbers.filter(barber=>barber.id === parseInt(id))[0];
    const {reviews,setReviews} = useReviews();
    const barberReviews = reviews.filter(value=>value.id === id);
    const {authUser,setAuthUser} = useAuthUser();
    const [review,setReview] = useState({id:id,content:''});

    const handleSubmit = e => {
        e.preventDefault();
        setReviews([review,...reviews]);
        setReview({...review,content: ''});
    }

    const handleChange = e => {
        setReview({...review,content: e.target.value});
    }

    const handleClick = ()=> {
        setAuthUser({...authUser,orders:[...authUser.orders,id]});
    }

    return (
        <div className='flex m-2 flex-col items-center justify-center'>
            <div className='m-5'>
                <img className='block w-3/4 mx-auto mb-2 hover:brightness-75' src={'https://www.betterteam.com/images/barber-job-description-5184x3456-20201124.jpeg?crop=40:21,smart&width=1200&dpr=2'} />
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <p className='text-4xl m-1'>{barber.firstName} {barber.lastName}</p>
                        <p className='text-2xl m-1'>${barber.price}</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-xl text-gray-400'>{barber.phone}</p>
                        <p className='text-xl text-gray-400'>{barber.email}</p>
                        <p className='text-xl text-gray-400'>{barber.address}</p>
                    </div>
                </div>
            </div>
            {
                !authUser.orders.includes(id) && <button onClick={handleClick} className='p-3 bg-blue-900 border-2 text-white rounded hover:bg-white hover:text-blue-900 border-blue-900'>Order</button>
            }
            {
                authUser?.orders && authUser.orders.includes(id) && (
                    <FormContainer submitHandler={handleSubmit}>
                        <Input className='w-full' placeHolder='Write review' type="text" value={review.content} changeHandler={handleChange} />
                        <SubmitButton value="Submit" />
                    </FormContainer>
                )
            }
            <h1 className='text-4xl font-bold m-2'>Reviews:</h1>
            {
                barberReviews.map(rev=>(
                    <div key={rev.id} className='flex flex-col m-2'>
                        <p className='text-2xl'>{rev.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BarberDetail;