import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import OrderCards from './OrderCards';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    const { isLoading, data: orders = [] } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/bookings/${user.email}`).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    // if (orders.length === 0) {
    //     return <div className='h-[100vh] flex justify-center items-center'>
    //         <h2 className="text-3xl font-semibold">You have not ordered any products.</h2>
    //     </div>
    // }



    return (
        <div className='mb-60'>
            <h2 className='text-center my-8 text-3xl font-semibold'>Your Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderCards key={order._id} order={order}></OrderCards>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;