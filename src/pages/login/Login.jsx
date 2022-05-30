import React, {useState} from "react";
import {Input,FormContainer,SubmitButton} from "../../components";

const Login = ()=> {
    const [userCredentials,setUserCredentials] = useState({
        email:'',
        password:''
    });

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

    const {email,password} = userCredentials;

    return (
        <FormContainer submitHandler={handleSubmit}>
            <Input value={email} changeHandler={handleChange} placeHolder={'Enter email'} type='email' name='email' />
            <Input value={password} changeHandler={handleChange} placeHolder={'Enter password'} type='password' name='password'/>
            <SubmitButton value={'Submit'} />
        </FormContainer>
    )
}

export default Login;