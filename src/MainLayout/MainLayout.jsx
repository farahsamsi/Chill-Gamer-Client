import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="font-roboto">

            {/* Navbar  */}
            <Navbar></Navbar>
            <div className="my-8 min-h-[calc(100vh-300px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;