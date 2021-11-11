import React from 'react';
import { Carousel } from 'react-bootstrap';
import banCar1 from '../../../images/banCar1.png';
import banCar2 from '../../../images/banCar2.PNG';
import './Banner.css'


const Banner = () => {
    return (
        
        <>
            <Carousel id="carousel" className="pb-5 mt-3 mb-5 pb-5">
                <Carousel.Item>
                <div className="row align-items-center carousel-sec">

<div className="col-md-6 col-sm-12"style={{paddingRight:'90px'}} >
   
   <h1 className="new" style={{color:'#E8614D'}}>title</h1>
   <p style={{color:'#FFFFFF'}}>item  </p>
    <div className="d-flex align-items-center">
   
   <button type="button" className="btn btn-danger Book_now me-5">Book Now</button>
    </div>

    
</div>
<div className="col-md-6">
    <img
        className=" img-fluid"
        src={banCar1}
        alt=""
    />
</div>
</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="row align-items-center carousel-sec">

<div className="col-md-6 col-sm-12"style={{paddingRight:'90px'}} >
   
   <h1 className="new" style={{color:'#E8614D'}}>title</h1>
   <p style={{color:'#FFFFFF'}}>item  </p>
    <div className="d-flex align-items-center">
   
   <button type="button" className="btn btn-danger Book_now me-5">Book Now</button>
    </div>

    
</div>
<div className="col-md-6">
    <img
        className=" img-fluid"
        src={banCar2}
        alt="First slide"
    />
</div>
</div>
                </Carousel.Item>
                
            </Carousel>
        </>
    );
};

export default Banner;