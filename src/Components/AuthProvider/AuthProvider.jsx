import PropTypes from 'prop-types'

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config';

import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const googleProvider = new GoogleAuthProvider();

// creating context 
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    // loading state
    const [loading, setLoading] = useState(true);

    // user information storing
    const [user, setUser] = useState(null);

    // creating user with email and password
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // log out function
    const handleLogOut = () => {
        Swal.fire({
            text: "Are you sure you want to sign out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFC311",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sign Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth)
                    .then(() => {
                        // toast.info('Successfully Signed Out');
                    })
                    .catch(error => toast.error(error.message))
                Swal.fire({
                    text: "Your are successfully signed out from Chill Gamer",
                    icon: "success"
                });
            }
        });
    }

    // update profile
    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null);
            }
            setLoading(false)

            return () => {
                unSubscribe();
            }
        })
    }, [])

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogOut,
        manageProfile,
        user,
        setUser,
        loading,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}



export default AuthProvider;