import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SideBar from '../../SideBar/SideBar';
import ManageProduct from '../../Admin/ManageProduct';
import MyOrder from '../userOrder/MyOrder';
import MakeAdmin from '../../Admin/MakeAdmin';
import AddProduct from '../../Admin/AddProduct';
import ManageOrder from '../../Admin/ManageOrder';
import Payment from '../Pay/Payment';
import Review from '../Review/Review';
import { useAuth } from '../../Contexts/AuthProvider';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';

const DashBoard = () => {
    let { path } = useRouteMatch();

    const {currentUser} = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: currentUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])



    return (
        <div className="">
        <SideBar/>
        <div className="wrapper">
        <Switch>                           
               
        <PrivateRoute path={`${path}/addProduct`}><AddProduct /></PrivateRoute>
               <PrivateRoute path={`${path}/makeAdmin`}><MakeAdmin /></PrivateRoute>
               <PrivateRoute path={`${path}/manageOrder`}><ManageOrder /></PrivateRoute>
               <PrivateRoute path={`${path}/manageProduct`}><ManageProduct /></PrivateRoute>
               <PrivateRoute path={`${path}/pay`}><Payment /></PrivateRoute>
               <PrivateRoute path={`${path}/review`}><Review /></PrivateRoute>
               <PrivateRoute  path={`${path}/myOrder`} ><MyOrder /></PrivateRoute>
               {isAdmin ?
               <PrivateRoute exact path={`${path}/`} ><ManageProduct /> </PrivateRoute>:
               <PrivateRoute exact path={`${path}/`} ><MyOrder /> </PrivateRoute>
               }
              
           </Switch>
        </div>
        
    </div>
    );
};

export default DashBoard;