import {Route, Routes, Navigate} from "react-router-dom";
import {Login, LoginSignUpHeader, Home, SignUp, BarberDetail,HomeHeader} from "./pages";
import {useAuthUser} from "./utils/storeProvider";

const App = ()=> {
    const {authUser} = useAuthUser();

    return (
        <Routes>
            <Route path='/' element={<LoginSignUpHeader/>}>
                <Route index element={<Login/>}/>
                <Route path='signup' element={<SignUp/>}/>
            </Route>
            <Route path='/home' element={<HomeHeader/>}>
                <Route index element={<Home/>}/>
                <Route path='/home/:id' element={!authUser.email ? <Navigate to='/'/> : <BarberDetail/>}/>
            </Route>
        </Routes>
    )
}

export default App;
