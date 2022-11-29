import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const OrderCards = ({ order }) => {
    // The My Orders route will have a table/cards. Each card/ table row will be an order having an image, title, price, and a pay button. On clicking the pay button, to take the user the payment page with fields for card details will pop up, or the user will be taken to a route where there will be a form for filling up card details. Save the payment information in the database and inform the user via a modal/toast. Don't forget to update the button text to "paid" after payment. Please note, payment will be done by Stripe.

    const { productId } = order;

    const { data: product = [] } = useQuery({
        queryKey: ["product"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/product/${productId}`).then(res =>
                res.json()
            )
    })

    const purchase = () => {
        toast('I am sorry to say that, payment system has not implemented!!!')
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 border">
                            <img src={product.image} alt={product.carName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product.carName}</div>
                        <div className="text-sm opacity-50 capitalize">{product.condition} Condition</div>
                    </div>
                </div>
            </td>
            <td>
                Resale Price: ${product.resalePrice}
                <br />
                <span className="badge badge-ghost badge-sm">Original Price: ${product.originalPrice}</span>
            </td>
            <th>
                <button onClick={purchase} className="btn btn-secondary text-white btn-xs">
                    Purchase
                </button>
            </th>
        </tr>
    );
};

export default OrderCards;