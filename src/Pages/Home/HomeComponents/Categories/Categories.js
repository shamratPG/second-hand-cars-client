import React from 'react';
import CategoryCard from './CategoryCard';
import sedan from '../../../../Assets/images/other-image/sedan.jpg';
import luxury from '../../../../Assets/images/other-image/luxury.jpg';
import suv from '../../../../Assets/images/other-image/suv.jpg';
import pickUp from '../../../../Assets/images/other-image/pickUp.jpg';


const Categories = () => {

    const categories = [
        { name: 'Sedan', img: sedan, value: 'sedan' },
        { name: 'SUV', img: suv, value: 'suv' },
        { name: 'Pick Up Truck', img: pickUp, value: 'pickUp' },
        { name: 'Luxury Car', img: luxury, value: 'luxuryCar' }
    ]

    return (
        <div className='max-w-[1175px] mx-auto my-16'>
            <h2 className='text-3xl mb-4'>Categories</h2>
            <hr className='h-1 bg-gradient-to-r from-primary to-secondary max-w-sm' />
            <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map((category, index) => <CategoryCard key={index} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;