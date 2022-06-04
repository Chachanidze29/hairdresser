import React from "react";
import {NavLink, useNavigate,Outlet} from "react-router-dom";
import {useAuthUser} from "../../utils/storeProvider";
import {authInitial} from "../../contexts/authUserContext";

const HomeHeader = ()=> {
    const navigate = useNavigate();
    const {authUser,setAuthUser} = useAuthUser();

    const handleClick = ()=> {
        setAuthUser(authInitial);
        navigate('/');
    }

    return (
        <>
            <header>
                <nav className='max-w-full bg-blue-900 font-bold mx-auto flex justify-evenly p-5'>
                    <NavLink className='hover:cursor-pointer text-white p-2 hover:text-blue-200' to='/home'>HairDresser</NavLink>
                    {authUser.email && <button className='hover:cursor-pointer text-blue-200 p-2 hover:border-blue-50 hover:text-blue-50 border-2 border-blue-500' onClick={handleClick}>Log Out</button>}
                </nav>
            </header>
            <main className='max-w-4xl mx-auto'>
                <Outlet/>
            </main>
        </>
    )
}

export default HomeHeader;