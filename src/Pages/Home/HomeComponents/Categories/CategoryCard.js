import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Components/Button';

const CategoryCard = ({ category }) => {
    const { name, img, value } = category;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='origin-center hover:origin-top'><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Button className="btn btn-primary"><Link to={`/category/${value}`}>Show All</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;