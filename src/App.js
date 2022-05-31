import {Route, Routes} from "react-router-dom";
import {Login, LoginSignUpHeader, Home, SignUp, BarberDetail,HomeHeader} from "./pages";

const App = ()=> (
    <Routes>
        <Route path='/' element={<LoginSignUpHeader/>}>
            <Route index element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
        </Route>
        <Route path='/home' element={<HomeHeader/>}>
            <Route index element={<Home/>}/>
            <Route path='/home/:id' element={<BarberDetail/>}/>
        </Route>
    </Routes>
)

export default App;
