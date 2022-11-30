import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assets/images/other-image/page-not-found.jpg'

const PageNotFound = () => {
    return (
        <div>
            <div className="hero h-[100vh]" style={{ backgroundImage: `url(${notFound})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <Link className='text-2xl link absolute top-2' to="/">Go Back Home.</Link>
            </div>
        </div>
    );
};

export default PageNotFound;