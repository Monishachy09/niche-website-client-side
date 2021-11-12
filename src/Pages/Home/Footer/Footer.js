import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
        <div className="container py-5 pt-5">
            <div className="row row-cols-lg-3 row-cols-md-3  row-cols-sm-3 align-items-baseline " style={{padding:'20px 0px 20px 0px'}}>
                <div className=" logo-section d-flex col-6 mb-3  mt-3 justify-content-around">
                
                       <div>
                           <img src={logo} alt="" />
                       <h3 className="mt-3 mb-5">Contact Us:</h3>
                       <h6><i className="fas fa-map-marker-alt"></i> Address: Sylhet-Bangladesh</h6>
                        <h6><i className="fas fa-phone-square-alt"></i> Phone: 018468353</h6>
                        <h6><i className="fas fa-blender-phone"></i> Phone: +(800) 12-4567</h6>
                        <h6><i className="fas fa-mail-bulk"></i> Email: info@gastrology.com</h6>
                       </div>
                          
                </div>
                <div className=" d-flex col-6 mb-3 mt-3 feature justify-content-around">
                    
                    <div>
                    <h3 className="mb-5">Quick Link:</h3>
                        <div className="footer-menu">
                        <ul className="text-white">
                            <li><Link className="text-white text-decoration-none" to="/home">Home</Link></li>
                            <li><Link className="text-white text-decoration-none" to="/services">Services</Link></li>
                            <li><Link className="text-white text-decoration-none" to="/conditions">Conditions</Link></li>
                            <li><Link className="text-white text-decoration-none" to="/aboutUs">About Us</Link></li>
                        </ul>
                        </div>
                          
                    </div>
                    
                </div>
               
                <div className=" aboutUs mb-3 mt-3 align-items-center">
                   <div>
                        <h3 className="mt-5">Follow Us:</h3>
                </div>
                        <div className="d-flex mt-3 social-icon">
                        <i className="facebook ms-3 fab fa-facebook-square"></i>
                        <i className="twitter ms-3 fab fa-twitter"></i>
                        <i className="instagram ms-3 fab fa-instagram"></i>
                        <i class="linkDin ms-3 fab fa-linkedin"></i>
                        <i class="google ms-3 fab fa-google-plus-g"></i>
                        

                        </div> 
                        <div className="blog mt-3"> 
                            <h6>Atriis is one of the leading online corporate travel booking tools used globally and is designed to empower travel managers and travellers of medium to large sized corporate clients.</h6>
                            </div>
                    </div>
                </div> 
                <p className="text-center" style={{color:"white"}}>&copy; Developed by Monisha Chowdhury</p>
            </div>
           
        </div>
    );
};

export default Footer;