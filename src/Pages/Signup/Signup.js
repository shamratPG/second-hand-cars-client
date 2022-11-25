import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import ThirdPartyAuth from '../../Components/ThirdPartyAuth';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {

    const { registerUser, addUserInfo } = useContext(AuthContext);

    //Navigate
    const navigate = useNavigate();

    // Error Message 
    const [error, setError] = useState('')

    // Form submit
    const { register, handleSubmit, reset } = useForm();
    const handleSignup = data => {
        console.log(data.name, data.email, data.password, data.role)
        registerUser(data.email, data.password)
            .then(userCredential => {
                console.log(userCredential)
                setError('');
                addUserInfo(data.name)
                    .then(() => {
                        reset();
                        setError('');
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => {
                        setError(err.message);
                        console.error(err);
                    })
            })
            .catch(err => {
                setError(err.message);
                console.error(err);
            })
    };

    //Sending User data to DATABASE
    const saveUser = (name, email, role) => {
        const newUser = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { "content-type": 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
                console.log(data);
                toast.success(`New ${role} Created`)
            })
    }

    // show password features
    const [passwordShown, setPasswordShown] = useState(false)
    const showPassword = () => {
        setPasswordShown(!passwordShown);
    }
    return (
        <div className='flex justify-center items-center container mx-auto max-w-sm'>
            <form onSubmit={handleSubmit(handleSignup)} className='w-full border border-1 p-6 shadow-lg rounded my-8 lg:my-24'>
                <h2 className="text-3xl mb-4">Sign Up</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" {...register("name", { required: true })} />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" {...register("email", { required: true })} />
                </div>

                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type={`${passwordShown ? 'text' : 'password'}`} placeholder="Type here" className="input input-bordered input-primary w-full" {...register("password", { required: true })} />
                    <label className="label">
                        <span className="label-text-alt flex items-center">
                            <input onChange={showPassword} id='showPassword' type="checkbox" className="checkbox" />
                            <span className='ml-1'>Show Password</span>
                        </span>
                    </label>
                </div>

                <label className="label">
                    <span className="label-text">Select what your role would be:</span>
                </label>
                <div className='flex justify-around mb-4 border border-1 border-primary py-1 rounded-lg'>
                    <label className="flex items-center label">
                        <span htmlFor="buyer" className="mr-2">Buyer</span>
                        <input id='buyer' type="radio" name="role" className="radio checked:bg-primary" checked value="buyer"
                            {...register("role", {
                                required: "Please select your role"
                            })} />
                    </label>
                    <label className="flex items-center label">
                        <span htmlFor="seller" className="mr-2">Seller</span>
                        <input id='seller' type="radio" name="role" className="radio checked:bg-accent" value="seller"
                            {...register("role")} />
                    </label>
                </div>


                {/* <div>
                    <p>Please select what you want to be:</p>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Buyer</span>
                            <input type="radio" name="role" className="radio checked:bg-red-500" checked value="buyer"
                                {...register("role", {
                                    required: "Please select your role"
                                })} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Seller</span>
                            <input type="radio" name="role" className="radio checked:bg-blue-500" checked value="seller"
                                {...register("role")} />
                        </label>
                    </div>
                </div> */}

                <Button>Sign Up</Button>

                <span className='text-error block mt-2'>{error}</span>

                <p className='mt-2'>Already have an account? <Link to='/login' className='link'>Login here. </Link></p>
                <hr className="my-8 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded " />

                <ThirdPartyAuth></ThirdPartyAuth>
            </form>

        </div>
    );
};

export default Signup;