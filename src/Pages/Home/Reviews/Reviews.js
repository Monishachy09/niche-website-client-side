import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';

const Reviews = () => {

    const [ testimonial, setTestimonial]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allReview')
        .then(res=> res.json())
        .then(data=> setTestimonial(data))
    },[])

    const options = {
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        loop: true,
        responsive: {
            1: { items: 1 },
            550: { items: 2 },
            786: { items: 3 },
            1200: { items: 3 }
        }
    };


    return (
        <section className="container">
            <div className="row ">
                <div className="text-center mb-4">                                      
                    <div className="text-center mt-5 mb-3">
                    <h1 className="text-danger">We love our clients</h1>
                    <p className="fst-italic">The best Reviews</p>
                </div>
                </div>
                <ReactOwlCarousel className='owl-theme'  {...options}>
                    {
                        testimonial.map((review, index) => {
                            return (
                                <div key={index} className="d-flex justify-content-around">
                                    <div key={index} className="card " style={{ width: '22rem' }}>
                                        <img src={review.imageURL} className=" bg-gray img-fluid" alt="..." />
                                        <div className="card-body ">
                                            <h6>{review.name}</h6>
                                            <p className="card-text">{review.review}</p>
                                            <h6 className="card-title">{review.info}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ReactOwlCarousel>
            </div>
        </section>
    );
};

export default Reviews;