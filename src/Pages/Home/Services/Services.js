import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {

    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setService(data.reverse()))       
    },[])

    return (
        <div className="container">
        <div className="row">
            <div className="text-danger mb-3">
            <h1>Buy your Dream car</h1>
            </div>
            <hr className="mt-3 hr-style" />
            {
                service.slice(0, 6).map((item, index) => {
                    return (
                        <div 
                        key={index}  className="col-lg-4 col-md-6 pt-5 d-flex justify-content-center">
                         <Card style={{ width: '20rem' }}>
                                    
                                    <div className="text-center">
                                           
                                               <Card.Img variant="top" src={item.imageURL} style={{width:'250px',height:'200px'}}/>
                                           
                                           </div>
                                      
                                        <Card.Body className="text-center">
                                        <h5>{item.name}</h5>
                                            <span> {item.shortDis} </span>
                                            <p><span className="price">${item.price}</span> /MRP</p>
                                            <span>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                <i className="rate fas fa-star"></i>
                                                 ({item.rate}) </span>
                                        </Card.Body>
                                        <Link to={`/purchase/${item._id}`}className="nav-link text-secondary"> <button  className="btn btn-info">Buy Now</button> </Link>
                                    </Card>
        </div>
                    )
                })
            }

        </div>
    </div>
    );
};

export default Services;