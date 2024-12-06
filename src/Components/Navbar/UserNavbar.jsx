import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserNavbar = () => {
    const { user, loading, handleLogOut } = useContext(AuthContext);
    const navigate = useNavigate();

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
        <div className="navbar min-h-0  container mx-auto md:mt-3 p-0">
            <div className="flex-1 h-fit">
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
                        {/* <ul
                            tabIndex={0}
                            className="hidden md:menu menu-sm dropdown-content  rounded-box z-[100] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}

                    </div>
                }
                {
                    newUser ? <div><button onClick={signOutBtn} className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN OUT</button></div> : <div className="join">
                        <Link to='/login'><button className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN IN</button></Link>
                        <Link to='/register'><button className="btn btn-sm join-item bg-primary font-semibold text-white">SIGN UP</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default UserNavbar;