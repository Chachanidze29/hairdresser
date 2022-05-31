import React, {useState} from "react";
import {Input,FormContainer,SubmitButton} from "../../components";
import { useNavigate } from 'react-router-dom';
import useToast from "../../utils/useToast";

const initialValue = {
    email:'',
    password:''
}

const Login = ()=> {
    const [userCredentials,setUserCredentials] = useState(initialValue);
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const {addToast,renderToasts} = useToast();

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
            if(auth_user.type === 'Customer') {
                localStorage.setItem('authUser',JSON.stringify(userCredentials));
                navigate('/home');
            }else {
                addToast({type:'error',message:"Can't log in type barber"});
                setUserCredentials(initialValue)
            }
        }else {
            setError('Wrong Email Or Password');
        }
    }

    const {email,password} = userCredentials;

    return (
        <>
            {renderToasts()}
            <FormContainer submitHandler={handleSubmit}>
                <Input errorText={error} value={email} changeHandler={handleChange} placeHolder={'Enter email'} type='email' name='email' />
                <Input errorText={error} value={password} changeHandler={handleChange} placeHolder={'Enter password'} type='password' name='password'/>
                <SubmitButton value={'Submit'} />
            </FormContainer>
        </>
    )
}

export default Login;