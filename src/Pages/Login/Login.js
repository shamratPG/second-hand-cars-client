import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import ThirdPartyAuth from '../../Components/ThirdPartyAuth';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    //navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Error Message 
    const [error, setError] = useState('')


    // Form Controls 
    const { register, handleSubmit, reset } = useForm();
    const handleLogin = data => {
        loginUser(data.email, data.password)
            .then(userCredential => {
                console.log(userCredential);
                setError('');
                reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(error)
                setError(err.message)
            })
    };



    // Show Password Features  
    const [passwordShown, setPasswordShown] = useState(false);
    const showPassword = () => {
        setPasswordShown(!passwordShown);
    }
    return (
        <div className='flex justify-center items-center container mx-auto max-w-sm'>
            <form onSubmit={handleSubmit(handleLogin)} className='w-full border border-1 p-6 shadow-lg rounded my-8 lg:my-24'>
                <h2 className="text-3xl mb-4">Log In</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered input-primary w-full" {...register("email", { required: true })} />
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type={`${passwordShown ? 'text' : 'password'}`} placeholder="Type here" className="input input-bordered input-primary w-full" {...register("password", { required: true })} />
                    <label className="label">
                        <span className="label-text-alt flex items-center">
                            <input onChange={showPassword} id='showPassword' type="checkbox" className="checkbox" />
                            <span htmlFor="showPassword" className='ml-1'>Show Password</span>
                        </span>
                    </label>
                </div>
                <Button>Log In</Button>

                <span className='text-error block mt-2'>{error}</span>

                <p className='mt-2'>Do not have account? <Link to='/signup' className='link'>Register here.</Link></p>


                <hr className="my-8 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded " />

                <ThirdPartyAuth></ThirdPartyAuth>
            </form>

        </div>
    );
};

export default Login;