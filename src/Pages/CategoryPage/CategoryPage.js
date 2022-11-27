import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const products = useLoaderData();


    const categoryId = products[0].categoryId;
    let categoryName;
    console.log(products[0]);
    if (categoryId === '1a') {
        categoryName = 'SUV'
    }
    else if (categoryId === '2b') {
        categoryName = 'Sedan'
    }
    else if (categoryId === '3c') {
        categoryName = 'Pick Up Trucks'
    }
    else if (categoryId === '4d') {
        categoryName = 'Luxury Cars'
    }


    return (
        <div className='max-w-[1175px] mx-auto'>
            <h2 className="text-3xl text-center my-4">All Cars Under Category: <span className="text-secondary font-semibold">{categoryName}</span> </h2>
            <div className="grid grid-cols-1 gap-6 mb-16">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;