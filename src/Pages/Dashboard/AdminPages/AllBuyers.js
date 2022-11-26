import React, { useEffect, useState } from 'react';

const AllBuyers = () => {

    const [allBuyers, setAllBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users?role=buyer')
            .then(res => res.json())
            .then(data => {
                setAllBuyers(data);
            })
    }, [])
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