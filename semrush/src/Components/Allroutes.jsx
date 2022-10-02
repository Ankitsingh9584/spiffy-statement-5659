
import {Routes,Route} from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import Signup from "./Signup"
import Pricing from "./Pricing"
export default function Allroutes(){
    return(
<Routes>
<Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
</Routes>
    )
}