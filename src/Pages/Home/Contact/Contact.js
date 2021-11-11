import React from 'react';
import './Contact.css';


const appointmentBanner = {
    background: `url("https://i.ibb.co/LhRGw9L/banner-bg.png"})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}


const Contact = () => {
    return (
        <section style={appointmentBanner}>
            <div className="pt-5">
            <h1>Get in <span className="contact-head ">touch with us</span></h1>
            <h4>let us know your opinion by contacting us.</h4>
        </div>
   {/* <section> */}
            <div className="container pt-5 pb-5">
            <form>
                <div className="row form-line">
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <label className="text-white">Your Name</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group"> 
                    <label className="text-white">Your Email</label>
                    <input type="email" className="form-control" id="" placeholder="Enter Your email"/>
                    </div>
                    <div className="form-group">
                    <label className="text-white">Your phone number</label>
                        <input type="tel" id="" className="form-control" placeholder="Enter phone number" />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 ps-5">
                <div className="form-group"> 
                <label  className="text-white"  >Message</label>
                    <textarea  id="description" className="form-control" placeholder="Enter Your Message"></textarea>
                    </div>
                    <div>
                        <button  className="btn btn-dark submit"><i className="far fa-paper-plane"></i> Send message</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
        {/* </section> */}
        </section>
    );
};

export default Contact;