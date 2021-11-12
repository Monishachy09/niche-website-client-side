import React from 'react';
import { Carousel } from 'react-bootstrap';
import banCar1 from '../../../images/banCar1.png';
import banCar2 from '../../../images/banCar2.PNG';
import './Banner.css'


const Banner = () => {
    return (

        <>
            <Carousel id="carousel" className="mb-5">
                <Carousel.Item>
                    <div className="row align-items-center carousel-sec">

                        <div className="col-md-6 col-sm-12" style={{ paddingLeft: '90px' }} >

                            <h1 className="new" style={{ color: '#E8614D' }}>POWER & BEAUTY</h1>
                            <p style={{ color: '#FFFFFF' }}>Free Library’s $1M auto archives are moving to Philly’s world-famous car museum and to a Hershey attraction</p>
                            <div className=" align-items-center">

                                <button type="button" className="btn btn-danger align-items-center Book_now me-5">Book Now</button>
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

                        <div className="col-md-6 col-sm-12 " style={{ paddingLeft: '90px' }} >

                            <h1 className="new" style={{ color: '#E8614D' }}>POWER & BEAUTY</h1>
                            <p style={{ color: '#FFFFFF' }}>Free Library’s $1M auto archives are moving to Philly’s world-famous car museum and to a Hershey attraction</p>
                            <div className=" align-items-center">

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