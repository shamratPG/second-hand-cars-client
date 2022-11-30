import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/images/slider-image/img-1.jpg'
import img2 from '../../../Assets/images/slider-image/img-2.jpg'
import img3 from '../../../Assets/images/slider-image/img-3.jpg'
import img4 from '../../../Assets/images/slider-image/img-4.jpg'
import img5 from '../../../Assets/images/slider-image/img-5.jpg'
import img6 from '../../../Assets/images/slider-image/img-6.jpg'
import img7 from '../../../Assets/images/slider-image/img-7.jpg'
import img8 from '../../../Assets/images/slider-image/img-8.jpg'
import Button from '../../../Components/Button';


const Slider = () => {

    const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8]
    const randomImg = sliderImages[Math.floor(Math.random() * sliderImages.length)]
    return (
        <div className="hero min-h-screen max-w-[1175px] mx-auto" style={{ backgroundImage: `url(${randomImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Find Your Match</h1>
                    <p className="mb-5 uppercase text-base-200">Welcome, we provide the platform to find the right buyer or seller for your cars</p>
                    <Button><Link to='/signup'>Join Now</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default Slider;