import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../Home/NavBar/NavBar';
import ServiceData from '../../AllData/ServiceData.json';

const SingleService = () => {
    const { Id } = useParams();
    const [serviceDetail, setServiceDetail] = useState({});



    useEffect(() => {
        setServiceDetail(ServiceData.find((ser) => ser.id == Id));
    }, [Id]);
    const { name, img, price, description } = serviceDetail;

    return (
        <>
            <div className="container">
                <NavBar />
                <div className="row mt-5 align-items-center">
                    <div className="col-md-4">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8 pe-5">
                        <h3>{name}</h3>
                        <div className="d-flex ">
                            <h4>Price: ${price}</h4>
                            <div className="d-flex mt-1 ms-auto me-3 color-yellow">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>

                            </div>
                            <p className="cursor-pointer">19 Customer review</p>
                        </div>
                        <hr className="mt-2 hr-style" />
                        <h5>Description:</h5>
                        <p>{description}</p>
                        <div className="d-flex align-items-center cursor-pointer">
                            <h6>Share this product: </h6>
                            <i class="fab fa-facebook-f ms-3"></i>
                            <i class="fab fa-instagram-square ms-3"></i>
                            <i class="fab fa-linkedin ms-3"></i>
                        </div>
                    </div>
                </div>

                {/* shipping form section */}
                <div className="shadow p-5 mt-5 mb-5">
                <h2 className="mb-5 ">Shipping address</h2>
                <form >
                    
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full name</label>
                                <input  type="text" className="form-control" name="name" placeholder=" Full Name" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input   type="email" className="form-control" name="name" placeholder="name@example.com" required />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Street Address</label>
                        <input  type="text" className="form-control" name="title" placeholder="House number and street name" required />
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">State</label>
                                <input type="text" className="form-control" name="name" placeholder=" state" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Town/City</label>
                                <input  type="text" className="form-control" name="name" placeholder=" city"  required />
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Zip code</label>
                                <input  type="text" className="form-control" name="name" placeholder=" zip code" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Phone number</label>
                                
                                <input type="tel" className="form-control" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-fruit">Submit</button>
                </form>
            </div>
            </div>
            </>
    );
};

export default SingleService;