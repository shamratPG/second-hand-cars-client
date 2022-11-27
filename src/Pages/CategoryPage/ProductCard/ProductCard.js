import { useQuery } from '@tanstack/react-query';
import { FaRegCheckCircle, FaCheckCircle } from 'react-icons/fa';
import React from 'react';
import Button from '../../../Components/Button';

const ProductCard = ({ product }) => {
    const { image, carName, sellerLocation, originalPrice, resalePrice, year, postedDate, sellerEmail, description } = product;

    const { isLoading, data: sellerData = [] } = useQuery({
        queryKey: ["users", sellerEmail],
        queryFn: () =>
            fetch(`http://localhost:5000/users/${sellerEmail}`).then(res =>
                res.json()
            )
    })
    console.log(image)
    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    // picture, name, location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button



    return (
        <div className="grid grid-cols-3 gap-6 border shadow-lg rounded">
            <div className='col-span-3 md:col-span-1'>
                <img className='w-full h-full' src={image} alt="Movie" />
            </div>
            <div className="col-span-3 md:col-span-2 p-4 h-full relative">
                <div>
                    <h2 className="text-lg font-semibold ">{carName}</h2>
                    <hr className='h-1 bg-gradient-to-r from-primary to-secondary max-w-xs my-2' />
                </div>

                <div className='pb-12'>
                    <p className='font-bold text-lg'>Original Price: <span className='text-xl text-accent'>${originalPrice}</span></p>

                    <p className='font-bold text-lg'>Resale Price: <span className='text-xl text-primary'>${resalePrice}</span></p>
                    <p>{description.slice(0, 100)}...</p>
                </div>
                <div className='absolute bottom-4 flex items-center'>
                    <span className='font-semibold text-secondary pr-2'>{sellerData.name}</span>
                    {
                        sellerData.verified && <FaCheckCircle className='text-blue-600'></FaCheckCircle>
                    }
                </div>
                <div className="absolute bottom-4 right-4">
                    <Button className="btn btn-primary">Book Now</Button>
                </div>

            </div>
        </div>

    );
};

export default ProductCard;