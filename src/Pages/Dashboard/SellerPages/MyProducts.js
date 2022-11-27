import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center my-8 text-3xl font-semibold'>My Products</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Posted On</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) =>
                                <tr key={product._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{product.carName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product?.postedDate}
                                    </td>
                                    <td>{product.status}</td>
                                    <th>
                                        <button className="btn btn-primary text-white btn-xs">Advertise</button>
                                        <button className="btn btn-error ml-2 text-white btn-xs">X</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyProducts;