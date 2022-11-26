import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';


export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    // Sign Up 
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Update Profile 
    const addUserInfo = name => {
        return updateProfile(auth.currentUser, { displayName: name })
    }

    //Log In
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log In with Google
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    //Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Global Observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    // Check is already user 
    const [info, setInfo] = useState(false)
    const userInfo = (email) => {
        setInfo(true)
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then((data) => {
                setInfo(true);
            })
        return info
    }

    //Sending User data to DATABASE
    const saveUserDb = (name, email, role) => {
        const newUser = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { "content-type": 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`New ${role} Created`)
            })
    }

    const authInfo = {
        registerUser,
        addUserInfo,
        loginUser,
        googleLogIn,
        userInfo,
        saveUserDb,
        logOut,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;