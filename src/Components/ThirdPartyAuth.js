import React from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ThirdPartyAuth = () => {
    return (
        <div className='flex flex-col justify-around'>
            <Link className='btn btn-outline btn-primary'>
                <FaGoogle className='text-4xl pr-2'></FaGoogle>
                Log In with Google
            </Link>
        </div>
    );
};

export default ThirdPartyAuth;