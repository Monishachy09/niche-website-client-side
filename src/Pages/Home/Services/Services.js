import React from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';


const services = [
    {
        name: 'Mercedes-Benz-SUV',
        description: 'A masterful combination of style, power, sporty handling and comfort.',
        img: "https://i.ibb.co/vcv8LD2/car3.png" ,
        price:"38,050",
        rate: 5.0
    },
    {
        name: 'Mercedes-Benz Gle',
        description: 'A masterful combination of style, power, sporty handling and comfort.',
        img: "https://i.ibb.co/X3YVFn8/car4.png",
        price:"54,750",
        rate: 4.5
    },
    {
        name: 'Rolls-Royce',
        description: 'A masterful combination of style, power, sporty handling and comfort.',
        img: "https://i.ibb.co/SrVK6FR/roler-removebg-preview.png" ,
        price:"12,000000",
        rate: 5.0
    },
    {
        name: 'BMW X5',
        description: 'A masterful combination of style, power, sporty handling and comfort.',
        img: "https://i.ibb.co/dpnG75h/car5.png",
        price:"72,0000",
        rate: 4.9
    },
    {
        name: 'Mercedes-Benz A-Class',
        description: 'A masterful combination of style, power, sporty handling and comfort.',
        img: "https://i.ibb.co/s532Zy2/car1.png",
        price:"46,000",
        rate: 4.5
    },
    {
        name: 'Mercedes-Benz-SUV A',
        description: 'A masterful combination of style, power, sporty handling and comfort.',
        img: "https://i.ibb.co/51XYFsr/car67.png",
        price:"36,230",
        rate: 5.0
    }
]



const Services = () => {
    return (
        <Container>
            
           <div className="pt-5 mt-5">
           <div id="service" className="text-center text-danger">
            <p>Our Vehicles Type & Brand</p>
            <h2>Find Your Best Vehicles</h2>
        </div>
        <div className="row">
        {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
        </div>
           </div>
        </Container>
        
    );
};

export default Services;