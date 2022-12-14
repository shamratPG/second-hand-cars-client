import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {



    const deleteUser = (id, name) => {
        const confirmDelete = window.confirm(`Do you want to delete ${name}`);
        if (confirmDelete) {
            fetch(`https://second-hand-server-iota.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`${name}is successfully Deleted.`)
                    }
                })
        }
    }

    const makeAdmin = (id, name) => {
        const confirmMakeAdmin = window.confirm(`Do you want to make ${name} an ADMIN`);
        if (confirmMakeAdmin) {
            fetch(`https://second-hand-server-iota.vercel.app/users/admin/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success(`${name}is an Admin.`)
                    }
                })
        }
    }

    const { isLoading, data: allBuyers = [] } = useQuery({
        queryKey: ["users", "buyer"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/users/buyer`).then(res =>
                res.json()
            )
    })
    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (!allBuyers.length) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <h2 className="text-3xl font-semibold">No Buyers are registered.</h2>
        </div>
    }


    return (
        <div className='mb-60'>
            <h2 className='text-center my-8 text-3xl font-semibold'>All Buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Head  */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers.map((buyer) =>
                                <tr key={buyer._id}>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>
                                        <button onClick={() => makeAdmin(buyer._id, buyer.name)} className="btn btn-primary text-white btn-xs">
                                            Make Admin
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteUser(buyer._id, buyer.name)} className="btn btn-error ml-2 text-white btn-xs">X</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;