import React from 'react';

const UpperNav = () => {
    return (
        <div className='bg-[#634c9f] text-white px-3 lg:px-0'>
            <div className='container mx-auto flex flex-col lg:flex-row lg:justify-between md:items-center'>
                <h2 className='text-center'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</h2>
                <div className='flex flex-col md:flex-row md:items-center md:gap-2 text-center'>
                    <h2>Until the end of the sale:</h2>
                    <h1 className='flex  items-center gap-2 '><span className='md:text-xl lg:text-3xl font-bold'>48</span>days <span className='md:text-xl lg:text-3xl font-bold'>06</span> houres <span className='md:text-xl lg:text-3xl font-bold'>30</span>minutes <span className='md:text-xl lg:text-3xl font-bold'>30</span>second</h1>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;