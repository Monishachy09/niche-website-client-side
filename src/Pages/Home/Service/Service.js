import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { name, description, img, price, rate } = props.service;
    return (
        <div className="col-lg-4 col-md-6 pt-5 d-flex justify-content-center">
            <Card style={{ width: '20rem' }}>
                                    
                                    <div className="text-center">
                                           
                                               <Card.Img variant="top" src={img} style={{width:'250px',height:'200px'}}/>
                                           
                                           </div>
                                      
                                        <Card.Body className="text-center">
                                        <h5>{name}</h5>
                                            <span> {description} </span>
                                            <p><span className="price">${price}</span> /MRP</p>
                                            <span>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                 ({rate}) </span>
                                        </Card.Body>
                                        <Link to=""className="nav-link text-secondary"> <button  className="btn btn-info">buy Now</button> </Link>
                                    </Card>
        </div>
    );
};

export default Service;