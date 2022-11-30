import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [userDbInfo, setUserDbInfo] = useState({})

    useEffect(() => {
        fetch(`https://second-hand-server-iota.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then((data) => {
                setUserDbInfo(data);
            })
    }, [user.email])

    return (

        <div className='flex justify-center items-center container mx-auto max-w-sm p-2'>
            <form className='w-full border border-1 p-6 shadow-lg rounded my-8'>
                <h2 className="text-3xl mb-4">User Info</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input name='name' type="text" value={user.displayName} className="input input-bordered input-primary w-full" disabled />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" value={user.email} className="input input-bordered input-primary w-full" disabled />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">You Are: </span>
                    </label>
                    <input name='email' type="text" value={userDbInfo?.role?.toUpperCase()} className="input input-bordered input-primary w-full" disabled />
                </div>
                <br />

                <div className="form-control w-full">
                    <input name='email' type="text" value={userDbInfo?.verified ? 'Verified' : 'Not Verified'} className="input input-bordered input-primary w-full" disabled />
                </div>


                <hr className="my-8 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded " />
            </form>

        </div>
    );
};

export default Dashboard;