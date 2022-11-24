import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // Sign Up 
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Update Profile 
    const addUserInfo = name => {
        return updateProfile(auth.currentUser, { displayName: name })
    }

    //Log In
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log In with Google
    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }

    //Log Out
    const logOut = () => {
        return signOut(auth);
    }

    // Global Observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        registerUser,
        addUserInfo,
        loginUser,
        googleLogIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;