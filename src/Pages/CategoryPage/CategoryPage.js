import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const products = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState({});


    const categoryId = products[0].categoryId;
    let categoryName;
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
        <div className='max-w-[1175px] mx-auto mt-10 mb-20'>
            <h2 className="text-3xl text-center my-4">All Cars Under Category: <span className="text-secondary font-semibold">{categoryName}</span> </h2>
            <div className="grid grid-cols-1 gap-10 mt-10 mb-16 p-1">
                {
                    products.map(product => <ProductCard key={product._id} product={product} setSelectedProduct={setSelectedProduct}></ProductCard>)
                }
            </div>
            <BookingModal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></BookingModal>
        </div>
    );
};

export default CategoryPage;