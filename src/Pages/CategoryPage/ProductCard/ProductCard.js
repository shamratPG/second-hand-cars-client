import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle, FaMapMarkerAlt, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import React from 'react';

const ProductCard = ({ product, setSelectedProduct }) => {

    const { _id, image, sellerLocation, carName, originalPrice, resalePrice, year, postedDate, sellerEmail, description } = product;


    const date = new Date();
    const yearUsed = date.getFullYear() - year

    const { isLoading, data: sellerData = [] } = useQuery({
        queryKey: ["users", sellerEmail],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/users/${sellerEmail}`).then(res =>
                res.json()
            )
    })
    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    return (
        <div id={_id} className="grid grid-cols-5 gap-6 border shadow-lg rounded">
            <div className='col-span-5 md:col-span-2'>
                <img className='w-full h-full' src={image} alt={carName} />
            </div>
            <div className="col-span-5 md:col-span-3 p-4 h-full relative">
                <div>
                    <h2 className="text-lg font-semibold mb-2">{carName}</h2>
                    <span className="text-sm flex items-center">
                        <FaMapMarkerAlt className='text-blue-600 pr-1 text-lg'></FaMapMarkerAlt>
                        {sellerLocation}
                    </span>
                    <span className="text-sm flex items-center">
                        <FaRegClock className='text-blue-600 pr-1 text-lg'></FaRegClock>
                        {`${yearUsed} Year${yearUsed > 1 ? 's' : ''} Used`}
                    </span>
                    <span className="text-sm flex items-center">
                        <FaRegCalendarAlt className='text-blue-600 pr-1 text-lg'></FaRegCalendarAlt>
                        {`Posted On: ${postedDate}`}
                    </span>

                    <hr className='h-1 bg-gradient-to-r from-primary to-secondary max-w-xs my-2' />
                </div>

                <div className='pb-16'>
                    <p className='font-bold text-lg'>Original Price: <span className='text-xl text-accent'>${originalPrice}</span></p>

                    <p className='font-bold text-lg'>Resale Price: <span className='text-xl text-primary'>${resalePrice}</span></p>
                    <p>{description.slice(0, 100)}...</p>
                </div>
                <div className='absolute bottom-4 flex items-center'>
                    <span className='font-semibold text-secondary pr-2'>
                        <span className='text-neutral'>Seller: </span>{sellerData.name}
                    </span>
                    {
                        sellerData.verified && <FaCheckCircle className='text-blue-600'></FaCheckCircle>
                    }
                </div>
                <div className="absolute bottom-4 right-4">
                    <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-accent text-white">Book Now</label>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;