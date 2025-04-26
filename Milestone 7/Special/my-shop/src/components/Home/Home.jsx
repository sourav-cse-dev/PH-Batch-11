import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Navbar/>
            <div className='w-full h-32 p-20'>
                <Banner/>
            </div>
        </div>
    );
};

export default Home;