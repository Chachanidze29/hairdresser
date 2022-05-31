import React, {useState} from "react";
import {Input,FormContainer,SubmitButton} from "../../components";
import { useNavigate } from 'react-router-dom';

const Login = ()=> {
    const [userCredentials,setUserCredentials] = useState({
        email:'',
        password:''
    });
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleChange = e => {
        const {name,value} = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let auth_user = JSON.parse(localStorage.getItem(userCredentials.email));
        if(auth_user && auth_user.password === password) {
            localStorage.setItem('authUser',JSON.stringify(userCredentials));
            navigate('/home');
        }else {
            setError('Wrong Email Or Password');
        }
    }

    const {email,password} = userCredentials;

    return (
        <FormContainer submitHandler={handleSubmit}>
            <Input errorText={error} value={email} changeHandler={handleChange} placeHolder={'Enter email'} type='email' name='email' />
            <Input errorText={error} value={password} changeHandler={handleChange} placeHolder={'Enter password'} type='password' name='password'/>
            <SubmitButton value={'Submit'} />
        </FormContainer>
    )
}

export default Login;