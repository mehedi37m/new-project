import { Outlet } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Navbar from "../Page/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;