import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { RiMenuFoldFill } from "react-icons/ri";
import UserNavbar from "./UserNavbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allReviews'>All Reviews</NavLink></li>
        <li><NavLink to='/addReview'>Add Review</NavLink></li>
        {user && <li><NavLink to={`/myReviews/${user.email}`}>My Reviews</NavLink></li>}
        {user && <li><NavLink to={`/myWatchlist/${user.email}`}>Game WatchList</NavLink></li>}
    </>
    return (
        <div>
            <div className="hidden md:flex">
                <UserNavbar></UserNavbar>
            </div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-2xl lg:text-4xl font-extrabold">CHILL<span className="text-primary">GAMER</span></Link>
                </div>
                <div className="flex-none">
                    {/* for lg device */}
                    <ul className=" px-1 hidden lg:menu lg:menu-horizontal font-bold">
                        {links}
                    </ul>
                    {/* for mobile and tablet device */}
                    <ul className="menu menu-horizontal px-1 lg:hidden">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-2xl m-1"><RiMenuFoldFill /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow font-bold">
                                {links}
                                <div className="md:hidden">
                                    <UserNavbar></UserNavbar>
                                </div>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;