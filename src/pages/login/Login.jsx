import React, {useState} from "react";
import {Input,FormContainer,SubmitButton} from "../../components";
import { useNavigate } from 'react-router-dom';
import useToast from "../../utils/useToast";
import {useAuthUser} from "../../utils/storeProvider";

const initialValue = {
    email:'',
    password:''
}

const Login = ()=> {
    const [userCredentials,setUserCredentials] = useState(initialValue);
    const navigate = useNavigate();
    const {authUser,setAuthUser} = useAuthUser();
    const {addToast,renderToasts} = useToast();

    const handleChange = e => {
        const {name,value} = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]:value
        })
    }

    const {email,password} = userCredentials;

    const handleSubmit = e => {
        e.preventDefault();
        let auth_user = JSON.parse(localStorage.getItem(userCredentials.email));
        if(auth_user && auth_user.password === password) {
            if(auth_user.type === 'Customer') {
                console.log(authUser);
                setAuthUser({...authUser,email: email,password: password});
                navigate('/home');
            } else {
                addToast({type:'error',message:"Can't log in type barber"});
            }
        }else {
            addToast({type:'error',message:'Wrong Email Or Password'});
        }
    }

    return (
        <>
            {renderToasts()}
            <FormContainer submitHandler={handleSubmit}>
                <Input value={email} changeHandler={handleChange} placeHolder={'Enter email'} type='email' name='email' />
                <Input value={password} changeHandler={handleChange} placeHolder={'Enter password'} type='password' name='password'/>
                <SubmitButton value={'Submit'} />
            </FormContainer>
        </>
    )
}

export default Login;