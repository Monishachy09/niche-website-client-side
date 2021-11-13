import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from '../../Pages/Home/NavBar/NavBar';
import { useAuth } from '../Contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import {  useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';


const SingleService = () => {

    const { Id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const {currentUser} = useAuth();
   
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard/myOrder" } };

    useEffect(() => {       
                  
        fetch(`http://localhost:5000/pd/${Id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))  
                  
    }, [Id])
    const { name, imageURL, price, description } = productDetail;


    const onSubmit = data => {
        const orderData = {
            ...currentUser,
            productName: productDetail.name,
            productPrice: productDetail.price,
            productImg: productDetail.imageURL,
          name: data.name,
          email: data.email,
          streetAddress: data.streetAddress,
          state: data.state,
          city: data.city,
          zipCode: data.zipCode,
          phone: data.phone,
          orderTime: new Date(),
          

        }

        alert('Order completed');
        reset();
        history.replace(from);


        const url = `http://localhost:5000/addOrder`
        console.log(orderData)
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your order placed successfully');
               
            }
        })
          
      };




    return (
        <>
            <div className="container">
                <NavBar/>
                <div className="row mt-5 align-items-center">
                    <div className="col-md-4">
                        <img src={imageURL} alt="" className="img-fluid" />
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
                       
                    </div>
                </div>

                {/* shipping form section */}
                <div className="shadow p-5 mt-5 mb-5">
                <h2 className="mb-5 ">Shipping address</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full name</label>
                                <input  defaultValue={currentUser.displayName} type="text" className="form-control" name="name"  {...register("name")} placeholder=" Full Name" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input  defaultValue={currentUser.email}  type="email" className="form-control" name="email"  {...register("email")} placeholder="name@example.com" required />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Street Address</label>
                        <input  type="text" className="form-control" name="streetAddress"  {...register("streetAddress")} placeholder="House number and street name" required />
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">State</label>
                                <input  type="text" className="form-control" name="state"  {...register("state")} placeholder=" state" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Town/City</label>
                                <input  type="text" className="form-control" name="city"  {...register("city")} placeholder=" city"  required />
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Zip code</label>
                                <input  type="text" className="form-control" name="zipCode"  {...register("zipCode")} placeholder=" zip code" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Phone number</label>
                                
                                <input  type="tel" className="form-control" name="phone"  {...register("phone")} placeholder="123-45-6785"  required/>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
            </div>
        </>
    );
};

export default SingleService;