import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-roboto">
            <h1 className="text-5xl">Main layout</h1>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;