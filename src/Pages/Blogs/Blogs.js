import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    const { isLoading, data: blogs = [] } = useQuery({
        queryKey: ["blogs"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/blogs`).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    return (
        <div className='max-w-[1175px] mx-auto mt-16 mb-20'>
            <h2 className="text-4xl font-semibold text-center my-8">All Blogs</h2>
            <div className='p-1 grid grid-cols-1'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;