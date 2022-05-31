import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

const LoginSignUpHeader = () => (
    <div className='h-full max-w-4xl mx-auto flex flex-col justify-center'>
        <header>
            <h1 className={'border-8 p-3 rounded border-blue-300 text-center text-4xl font-bold text-blue-300'}>Cut
                Your Hair With Best <Link className='border-b-2 border-blue-300' to='/home'>Barbers</Link></h1>
            <nav
                className='mt-10 max-w-2xl mx-auto flex items-center bg-blue-300 rounded-tr-xl rounded-tl-xl p-3 justify-around'>
                <NavLink className='text-white font-bold text-2xl border-b-2 hover:border-blue-500'
                         to='/'>Login</NavLink>
                <NavLink className='text-white font-bold text-2xl border-b-2 hover:border-blue-500'
                         to='signup'>SignUp</NavLink>
            </nav>
        </header>
        <main className='bg-blue-300 rounded-xl p-5'>
            <Outlet/>
        </main>
    </div>
)

export default LoginSignUpHeader;