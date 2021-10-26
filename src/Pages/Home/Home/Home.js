import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Exparts from '../Exparts/Exparts';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div  id="home">
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
            <ContactUs></ContactUs>
            

        </div>
    );
};

export default Home;