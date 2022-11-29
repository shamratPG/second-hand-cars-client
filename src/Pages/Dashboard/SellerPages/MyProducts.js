import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { isLoading, data: products = [] } = useQuery({
        queryKey: [user.email],
        queryFn: () =>
            fetch(`http://localhost:5000/products/seller/${user.email}`)
                .then(res =>
                    res.json()
                )
    })

    const setAdvertise = (productId, productName) => {
        const confirmAdvertise = window.confirm(`Confirm Advertise on ${productName}`);
        if (confirmAdvertise) {
            fetch(`http://localhost:5000/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success(`${productName}is successfully advertised.`)
                    }
                })
        }
    }

    const deleteProduct = (productId, productName) => {
        const confirmDelete = window.confirm(`Do You Want to delete ${productName}?`);
        if (confirmDelete) {
            fetch(`http://localhost:5000/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`${productName}is successfully Deleted.`)
                    }
                })
        }
    }


    if (isLoading) {
        return <div className='h-[90vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (!products.length) {
        return <div className='h-[90vh] flex justify-center items-center'>
            <p className="text-3xl font-semibold">You have no product listed. <Link className="text-secondary" to="/dashboard/addProduct">Add new products .</Link></p>
        </div>
    }
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
                            <th>Actions</th>
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
                                        <button onClick={() => setAdvertise(product._id, product.carName)} className="btn btn-primary text-white btn-xs" disabled={`${product.status === 'advertised' ? ' ' : ''}`} >
                                            {product.status === 'advertised' ? 'Advertised' : 'Advertise'}
                                        </button>
                                        <button onClick={() => deleteProduct(product._id, product.carName)} className="btn btn-error ml-2 text-white btn-xs">X</button>
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