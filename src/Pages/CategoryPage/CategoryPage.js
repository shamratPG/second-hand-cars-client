import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryPage = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='max-w-[1175px] mx-auto'>
            <h2 className="text-3xl text-center">All Cars Under Category: {products[0].category}</h2>
        </div>
    );
};

export default CategoryPage;