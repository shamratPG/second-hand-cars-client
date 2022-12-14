import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ThirdPartyAuth = () => {
    const { googleLogIn, saveUserDb } = useContext(AuthContext);


    //Navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleSignIn = () => {
        googleLogIn()
            .then(userCredential => {
                navigate(from, { replace: true });
                saveUserDb(userCredential.user.displayName, userCredential.user.email, 'buyer')
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='flex flex-col justify-around'>
            <Link onClick={googleSignIn} className='btn btn-outline btn-primary'>
                <FaGoogle className='text-4xl pr-2'></FaGoogle>
                Log In with Google
            </Link>
        </div>
    );
};

export default ThirdPartyAuth;