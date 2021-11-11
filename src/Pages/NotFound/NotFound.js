import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
           <img style={{width:"100%", height:"500px"}} src={notFound} alt=""/>
          <div className="mt-3 text-center">
               <Link to="/"><button className="btn btn-info">Go Back</button></Link>
          </div>
        </div>
    );
};

export default NotFound;