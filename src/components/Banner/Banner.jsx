import React from 'react';

const Banner = () => {
    return (
        <div className='text-center bg-bannerBackground rounded-xl text-white h-96 bg-no-repeat bg-cover bg-blend-multiply bg-slate-500 flex justify-center items-center'>
            <div className='w-3/6'>
            <h1 className='text-5xl font-bold'>Discover an exceptional cooking, <br /> class tailored for you!</h1>
            <p className='my-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur obcaecati voluptate aliquid iusto architecto quia perferendis? Ipsam, explicabo, dignissimos impedit facilis quam dolorem exercitationem ullam excepturi totam voluptatem reiciendis?</p>
            <button className="btn btn-success rounded-full mr-5 text-white">Explore Now</button>
            <button className="btn btn-outline btn-accent rounded-full">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;