import React from "react";
import {NavLink, useNavigate,Outlet} from "react-router-dom";

const HomeHeader = ()=> {
    const navigate = useNavigate();
    const authUser = localStorage.getItem('authUser');

    const handleClick = ()=> {
        localStorage.removeItem('authUser');
        navigate('/');
    }

    return (
        <>
            <header>
                <nav className='max-w-2xl bg-blue-300 rounded font-bold mx-auto flex justify-evenly p-5'>
                    <NavLink className='hover:cursor-pointer text-white p-2 hover:text-blue-500' to='/home'>HairDresser</NavLink>
                    {authUser && <button className='hover:cursor-pointer text-blue-500 p-2 hover:text-white border-2 border-blue-500' onClick={handleClick}>Log Out</button>}
                </nav>
            </header>
            <main className='max-w-2xl mx-auto'>
                <Outlet/>
            </main>
        </>
    )
}

export default HomeHeader;