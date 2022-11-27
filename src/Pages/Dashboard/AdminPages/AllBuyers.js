import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {


    const { isLoading, data: allBuyers = [] } = useQuery({
        queryKey: ["users", "buyer"],
        queryFn: () =>
            fetch(`http://localhost:5000/users/buyer`).then(res =>
                res.json()
            )
    })
    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }


    return (
        <div>
            <h2 className='text-center my-8 text-3xl font-semibold'>All Buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Head  */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers.map((buyer, index) =>
                                <tr key={buyer._id}>
                                    <th>{index + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.role}</td>
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