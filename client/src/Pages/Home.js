import React from 'react';
import './Home.css';
import Pricing from './pricing';
import Footer from './Footer';
import Navbar from './Navbar';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services'
import Careers from './Careers'
import MeetOurTeam from './MeetOurTeam'
import ContactUs from './ContactUs'

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            {/* Banner */}
            <Banner/>
            {/* About Us */}
            <AboutUs/>
            {/* Services */}
            <Services/>
            {/* Our Skills */}
            {/* Career */}
            <Careers/>
            {/* Meet Our Team */}
            <MeetOurTeam/>
            {/* Pricing */}
            <Pricing />
            {/* Contact Us */}
            <ContactUs/>
            {/* footer */}
            <Footer />
        </div>
    )
};

export default Home;
