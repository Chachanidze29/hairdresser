import React, {useState} from "react";
import {Input,FormContainer,SubmitButton} from "../../components";

export const type = {
    customer:"Customer",
    barber:"Barber"
};

const SignUp = ()=> {
    const [userCredentials,setUserCredentials] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        type:type.customer,
        phone:'',
        price:'',
        address:''
    });
    const [selected,setSelected] = useState("Customer");

    const {firstName,lastName,email,password,phone,price,address} = userCredentials;

    const handleChange = e => {
        const {name,value} = e.target;

        setUserCredentials({
            ...userCredentials,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userCredentials);
    }

    return (
        <FormContainer submitHandler={handleSubmit}>
            <div className='flex flex-row justify-between items-center w-1/4'>
                <p className='text-xl text-white'>Sign Up As</p>
                <select className='bg-blue-500 rounded p-2 text-center text-white outline-0' value={selected} onChange={e => {
                    const {value} = e.target;
                    setSelected(value);
                    setUserCredentials({...userCredentials,type: value});
                }}>
                    <option value={type.barber}>{type.barber}</option>
                    <option value={type.customer}>{type.customer}</option>
                </select>
            </div>
            <Input value={firstName} changeHandler={handleChange} placeHolder={'Enter first name'} type='text' name='firstName'/>
            <Input value={lastName} changeHandler={handleChange} placeHolder={'Enter last name'} type='text' name='lastName'/>
            <Input value={email} changeHandler={handleChange} placeHolder={'Enter email'} type='email' name='email'/>
            <Input value={password} changeHandler={handleChange} placeHolder={'Enter password'} type='password' name='password'/>
            {
                selected === type.barber &&
                <>
                    <Input value={phone} changeHandler={handleChange} placeHolder={'Enter phone number'} type='number' name='phone'/>
                    <Input value={address} changeHandler={handleChange} placeHolder={'Enter address'} type='text' name='address'/>
                    <Input value={price} changeHandler={handleChange} placeHolder={'Enter price'} type='number' name='price'/>
                </>
            }
            <SubmitButton value={'Submit'} />
        </FormContainer>
    )
}

export default SignUp;