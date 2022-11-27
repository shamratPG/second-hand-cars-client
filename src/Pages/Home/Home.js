import React from 'react';
import Categories from './HomeComponents/Categories/Categories';
import Slider from './HomeComponents/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
        </div>
    );
};

export default Home;