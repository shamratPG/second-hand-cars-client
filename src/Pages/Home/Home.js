import React from 'react';
import Categories from './HomeComponents/Categories/Categories';
import Faqs from './HomeComponents/Faqs';
import Slider from './HomeComponents/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;