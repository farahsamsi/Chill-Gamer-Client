import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto md:mt-3">
            <div className="flex-1">
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="dropdown dropdown-end hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex items-center justify-center">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className="join">
                    <Link to='/login'><button className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN IN</button></Link>
                    <Link to='/register'><button className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN UP</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;