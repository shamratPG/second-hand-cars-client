import React from 'react';
import Advertised from './HomeComponents/Advertised/Advertised';
import Categories from './HomeComponents/Categories/Categories';
import Faqs from './HomeComponents/Faqs';
import Slider from './HomeComponents/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Advertised></Advertised>
            <Categories></Categories>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;