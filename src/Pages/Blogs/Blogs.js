import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    const { isLoading, data: blogs = [] } = useQuery({
        queryKey: ["blogs"],
        queryFn: () =>
            fetch(`http://localhost:5000/blogs`).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    return (
        <div className='max-w-[1175px] mx-auto'>
            <h2 className="text-3xl text-center my-4">All Blogs</h2>
            <div className='p-1 grid grid-cols-1'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;