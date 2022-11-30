import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, description, img } = blog;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-16">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};


export default BlogCard;