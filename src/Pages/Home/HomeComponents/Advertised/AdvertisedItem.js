import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../../Components/Button';

const AdvertisedItem = ({ product }) => {
    const { _id, image, carName, resalePrice, categoryId } = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='origin-center hover:origin-top h-44'><img src={image} alt={carName} /></figure>
            <div className="card-body">
                <div className='flex'>
                    <h2 className="card-title">{carName}</h2>
                    <p className='font-bold absolute right-4'><span className='text-xl text-primary'>${resalePrice}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary w-12 h-12 rounded-full text-neutral"><Link to={`/category/${categoryId}/#${_id}`}><FaArrowRight className='text-xl'></FaArrowRight></Link></button>
                </div>
            </div>
            <div className='w-8 h-8 bg-secondary flex justify-center items-center text-white font-semibold rounded-tl absolute'><span>Ad</span></div>
        </div>
    );
};

export default AdvertisedItem;