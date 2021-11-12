import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SideBar from '../../SideBar/SideBar';
import ManageProduct from '../manageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import MakeAdmin from '../makeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import Payment from '../Pay/Payment';
import Review from '../Review/Review';
import { useAuth } from '../../Contexts/AuthProvider';

const DashBoard = () => {
    let { path } = useRouteMatch();

    const {currentUser} = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);


    return (
        <div className="">
        <SideBar/>
        <div className="wrapper">
        <Switch>                           
               
               <Route path={`${path}/addProduct`}><AddProduct /></Route>
               <Route path={`${path}/makeAdmin`}><MakeAdmin /></Route>
               <Route path={`${path}/manageOrder`}><ManageOrder/></Route>
               <Route path={`${path}/manageProduct`}><ManageProduct /></Route>
               <Route path={`${path}/pay`}><Payment/></Route>
               <Route path={`${path}/review`}><Review/></Route>
               <Route  path={`${path}/myOrder`} ><MyOrder/></Route>
               <Route exact path={`${path}/`} ><MyOrder/> </Route>
              
           </Switch>
        </div>
        
    </div>
    );
};

export default DashBoard;