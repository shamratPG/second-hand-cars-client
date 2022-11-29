import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {


    const verifyUser = (id, name) => {
        const confirmVerify = window.confirm(`Do you want to verify ${name}`);
        if (confirmVerify) {
            fetch(`https://second-hand-server-iota.vercel.app/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success(`${name}is Verified.`)
                    }
                })
        }
    }

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

    const { isLoading, data: allSellers = [] } = useQuery({
        queryKey: ["users", "seller"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/users/seller`).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (allSellers.length === 0) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <h2 className="text-3xl font-semibold">No Seller are registered.</h2>
        </div>
    }
    return (
        <div className='mb-60 '>
            <h2 className='text-center my-8 text-3xl font-semibold'>All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Head  */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allSellers.map((seller) =>
                                <tr key={seller._id}>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        {
                                            seller.verified ? <button className="btn btn-secondary text-white btn-xs" disabled>
                                                Verified
                                            </button>
                                                : <button onClick={() => verifyUser(seller._id, seller.name)} className="btn btn-secondary text-white btn-xs">
                                                    Verify Seller
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => makeAdmin(seller._id, seller.name)} className="btn btn-primary text-white btn-xs">
                                            Make Admin
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteUser(seller._id, seller.name)} className="btn btn-error ml-2 text-white btn-xs">X</button>
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

export default AllSellers;