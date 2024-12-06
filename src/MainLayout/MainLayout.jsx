import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Loading from "../Components/Loading";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import 'react-tooltip/dist/react-tooltip.css'


const MainLayout = () => {
    const { loading } = useContext(AuthContext);

    const [theme, setTheme] = useState('light'); // Initial theme
    const toggleTheme = () => {
        // Toggle between light and dark themes
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div data-theme={theme} className="font-roboto">

            {/* Navbar  */}
            <Navbar></Navbar>
            <button
                onClick={toggleTheme}
                className="btn btn-outline rounded-full"
            >
                {theme === 'light' ? <IoMoon /> : <IoSunnyOutline />}
            </button>

            <p className="text-4xl">Text</p>
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