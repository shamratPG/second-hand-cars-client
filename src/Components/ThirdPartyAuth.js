import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ThirdPartyAuth = () => {
    const { googleLogIn } = useContext(AuthContext);
    const googleSignIn = () => {
        googleLogIn()
            .then(userCredential => console.log(userCredential))
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