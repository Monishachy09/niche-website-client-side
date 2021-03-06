import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Services/>
            <Brands/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;