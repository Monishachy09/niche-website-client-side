import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Brands/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;