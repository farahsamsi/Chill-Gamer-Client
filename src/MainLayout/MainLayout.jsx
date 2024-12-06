import './Main.css'
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Loading from "../Components/Loading";

const MainLayout = () => {
    const { loading } = useContext(AuthContext);
    return (
        <div className="font-roboto">

            {/* Navbar  */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-300px)]">
                {/* <Loading></Loading>
                <Outlet></Outlet> */}
                {
                    loading ? <Loading></Loading> : <Outlet></Outlet>
                }
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;