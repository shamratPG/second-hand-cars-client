import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {

    const [error, setError] = useState('');

    const { user } = useContext(AuthContext);

    const imageApiKey = process.env.REACT_APP_imagebb;

    const { register, handleSubmit, reset } = useForm();


    const handleProductSubmit = data => {
        //Send image to the server
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageApiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    data.image = imgData.data.url;
                    const productData = { ...data, sellerEmail: user.email, status: 'unsold' }
                    console.log(productData)

                    //Save Product info in db
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.carName} is added successfully`);
                            reset()
                        })
                }
            })



    }


    return (
        <div className='container mx-auto max-w-xl'>
            <form onSubmit={handleSubmit(handleProductSubmit)} className='w-full border border-1 p-6 shadow-lg rounded my-8'>
                <h2 className="text-3xl mb-4">Add New Product</h2>

                {/* Car Name & Model   */}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Car Name & Model</span>
                    </label>
                    <input name='carName' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" {...register("carName", { required: true })} />
                </div>

                {/* Type of Car:  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Type of Car:</span>
                    </label>
                    <select className="select select-bordered select-primary" {...register("category", { required: true })} defaultValue="category">
                        <option disabled value='category'>Category</option>
                        <option value="suv">SUV</option>
                        <option value="sedan">Sedan</option>
                        <option value="pickUp">Pick up Truck</option>
                        <option value="luxuryCar">Luxury Car</option>
                    </select>
                </div>

                {/* Select Car's Condition */}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Select Car's Condition</span>
                    </label>
                    <select className="select select-bordered select-primary" {...register("condition", { required: true })} defaultValue="condition">
                        <option disabled value='condition'>Condition</option>
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                    </select>
                </div>

                {/* Year of Purchase */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Year of Purchase</span>
                    </label>
                    <input name='year' type="number" placeholder="Year" className="input input-bordered input-primary w-full" {...register("year", { required: true })} />
                </div>

                {/* Original Price  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input name='originalPrice' type="number" placeholder="$$$" className="input input-bordered input-primary w-full" {...register("originalPrice", { required: true })} />
                </div>

                {/* Resale Price  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input name='resalePrice' type="number" placeholder="$$$" className="input input-bordered input-primary w-full" {...register("resalePrice", { required: true })} />
                </div>

                {/* Mobile Number  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input name='sellerPhone' type="tel" placeholder="+880 1XXX NNNNNN" className="input input-bordered input-primary w-full" {...register("sellerPhone", { required: true })} />
                </div>

                {/* Location */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input name='sellerLocation' type="text" placeholder="Your Location" className="input input-bordered input-primary w-full" {...register("sellerLocation", { required: true })} />
                </div>

                {/* Image */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text capitalize">Upload a proper Image of your car</span>
                    </label>
                    <input name='image' type="file" placeholder="Type here" className="w-full" {...register("image", { required: true })} />
                </div>

                {/* Description  */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Car Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered textarea-primary h-24" placeholder="Write Your Car's Details" {...register("description", { required: true })}></textarea>
                </div>


                <Button>Submit</Button>

                <span className='text-error block mt-2'>{error}</span>

                <hr className="my-8 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded " />


            </form>

        </div>
    );
};

export default AddProduct;