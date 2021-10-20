import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Medicines from './Medicines/Medicines';
import Testmonials from './Testmonials/Testmonials';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Medicines></Medicines>
            <Services></Services>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;