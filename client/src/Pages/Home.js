import React from 'react';
import './Home.css';
import Pricing from './pricing';
import Footer from './Footer';
import Navbar from './Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            {/* Banner */}
            <Banner/>
            {/* About Us */}
            {/* Services */}
            {/* Our Skills */}
            {/* Career */}
            {/* Meet Our Team */}
            {/* Pricing */}
            <Pricing />
            {/* Contact Us */}
            {/* footer */}
            <Footer />
        </div>
    )
};

export default Home;
