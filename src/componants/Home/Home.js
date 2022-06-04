import React from 'react';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='part1'>
                <div className='text-part'>
                <h1 className='text'>Favourite <br></br> <span className='player'>Player</span>
                <br></br><span className='world'> world</span></h1>
                </div>
                <div className='slider-style'>
            <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default Home;