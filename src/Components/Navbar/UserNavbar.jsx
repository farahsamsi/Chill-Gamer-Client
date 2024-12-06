import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserNavbar = () => {
    const { user, loading, handleLogOut, setTheme, theme } = useContext(AuthContext);
    const navigate = useNavigate();

    // theme changing 
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = e => {
        if (e.target.checked) setTheme("dark");
        else setTheme("light")
    }

    const [newUser, setNewUser] = useState({});
    useEffect(() => {
        if (loading) {
            console.log('wait');
        } else {
            setNewUser(user);
        }
    }, [loading, user])

    const signOutBtn = () => {
        Swal.fire({
            text: "Are you sure you want to sign out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFC311",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sign Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleLogOut()
                    .then(() => {
                        // toast.info('Successfully Signed Out');
                        navigate('/');
                    })
                    .catch(error => toast.error(error.message))
                Swal.fire({
                    text: "Your are successfully signed out from Chill Gamer",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="container mx-auto md:mt-3 px-1">
            <div className="navbar min-h-0  p-0">
                <div className="flex-1 h-fit">
                    <input
                        checked={theme === 'dark' ? true : false}
                        onChange={toggleTheme}
                        type="checkbox"
                        className="hidden md:flex toggle" />
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                    {
                        newUser && <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={newUser.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={newUser.photoURL} />
                                </div>
                            </div>
                        </div>
                    }
                    <div>
                    </div>
                    {
                        newUser ? <div><button onClick={signOutBtn} className={`btn btn-sm join-item bg-primary font-semibold ${theme === 'light' ? 'text-white' : 'text-black'}`}>SIGN OUT</button></div> : <div className="join">
                            <Link to='/login'><button className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN IN</button></Link>
                            <Link to='/register'><button className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN UP</button></Link>
                        </div>
                    }
                </div>
            </div>

            <div className="flex justify-center items-center md:hidden">
                <input onChange={toggleTheme}
                    type="checkbox" className="toggle" defaultChecked />
            </div>
        </div>
    );
};

export default UserNavbar;