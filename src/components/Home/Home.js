import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import Medicines from './Medicines/Medicines';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Medicines></Medicines>
        </div>
    );
};

export default Home;