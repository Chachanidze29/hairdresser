import {Route, Routes} from "react-router-dom";
import {Login,LoginSignUpHeader,Home,SignUp} from "./pages";

const App = ()=> (
    <Routes>
        <Route path='/' element={<LoginSignUpHeader/>}>
            <Route index element={<Login/>} />
            <Route path='signup' element={<SignUp/>} />
        </Route>
        <Route path='/home' element={<Home/>} />
    </Routes>
)

export default App;
