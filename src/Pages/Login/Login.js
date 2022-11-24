import React, { useState } from 'react';
import Button from '../../Components/Button';
import ThirdPartyAuth from '../../Components/ThirdPartyAuth';

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false)
    const showPassword = () => {
        setPasswordShown(!passwordShown);
    }
    return (
        <div className='flex justify-center items-center container mx-auto max-w-sm'>
            <form className='w-full border border-1 p-4 shadow-lg rounded my-8 lg:my-24'>
                <h2 className="text-3xl mb-4">Log In</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type={`${passwordShown ? 'text' : 'password'}`} placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <label className="label">
                        <span className="label-text-alt flex  items-center">
                            <input onChange={showPassword} id='showPassword' type="checkbox" className="checkbox" />
                            <span htmlFor="showPassword" className='ml-1'>Show Password</span>
                        </span>
                    </label>
                </div>
                <Button>Login</Button>
                <hr className="my-8 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded " />
                <ThirdPartyAuth></ThirdPartyAuth>
            </form>

        </div>
    );
};

export default Login;