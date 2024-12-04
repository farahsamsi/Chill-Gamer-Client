import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="font-roboto">

            {/* Navbar  */}
            <Navbar></Navbar>

            <Outlet></Outlet>

            {/* Footer */}
        </div>
    );
};

export default MainLayout;