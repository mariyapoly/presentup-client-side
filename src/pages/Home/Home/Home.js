
import React from 'react';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeCountDown from '../HomeCountDown/HomeCountDown';
import HomeService from '../HomeService/HomeService';
import HomeSlider from '../HomeSlider/HomeSlider';

const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <HomeCountDown></HomeCountDown>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
        </>
    );
};

export default Home;