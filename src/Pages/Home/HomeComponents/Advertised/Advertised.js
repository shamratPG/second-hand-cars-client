import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const Advertised = () => {
    const { data: advertisedItems = [] } = useQuery({
        queryKey: ["products", "ads"],
        queryFn: () =>
            fetch(`https://second-hand-server-iota.vercel.app/products/ads`)
                .then(res =>
                    res.json()
                )
    })
    if (advertisedItems.length === 0) return;


    return (
        <div className='max-w-[1175px] mx-auto my-20'>
            <h2 className='text-3xl mb-4 pl-2'>Hot Items (Advertised) </h2>
            <hr className='h-1 bg-gradient-to-r from-primary to-secondary max-w-sm m-1' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 p-1'>
                {
                    advertisedItems.map(item => <AdvertisedItem key={item._id} product={item}></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default Advertised;