import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { isLoading, data: allUsers = [] } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/users`).then(res =>
                res.json()
            )
    })


    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    return (
        <div className='mb-60'>
            <h2 className='text-center my-8 text-3xl font-semibold'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Head  */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.map((user) =>
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;