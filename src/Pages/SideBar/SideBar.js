import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import logo from '../../images/logo2.png';
import addAdmin from '../DashBoard/addAdmin/addAdmin';
import manageProduct from '../DashBoard/manageProduct/manageProduct';
import myOrder from '../DashBoard/MyOrder/myOrder';
import './SideBar.css';

const SideBar = () => {
    let { path, url } = useRouteMatch();
    return (
        <div class="menubar">
        <input type="checkbox" id="btn" hidden />
        <label for="btn" class="menu-btn">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </label>
        <nav id="sidebar">
          <div class="sidebar_logo">
          <img className="ps-3 img-fluid" src={logo} alt="" />
          </div>
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <ul class="sidebarList">
                <div className="dropdown-container">
                  <Link  to={`${url}`}  style={{textDecoration:'none'}} > <li className="sidebarListItem active">
                    <i className="fas fa-border-all"></i>
                    My Order
                  </li></Link>
  
                </div>
                  <div className="dropdown-container">
                    <Link to={`${url}/addProduct`} style={{textDecoration:'none'}} ><li className="sidebarListItem"><i className="fas fa-cart-plus"></i> Add Product</li></Link>
                </div>
                  <div className="dropdown-container">
                    <Link to={`${url}/addAdmin`} style={{textDecoration:'none'}} ><li className="sidebarListItem"><i className="fas fa-user-friends"></i> Add Admin</li></Link>
                </div>
                <div className="dropdown-container">
                  <li className="sidebarListItem">
                    <i className="far fa-clone"></i>
                    Categories
                  </li>
                  <div className="dropdown-content">
                    <Link to="/addCategory" style={{textDecoration:'none'}} ><li className="sidebarListItem">Add Category</li></Link>
                    <Link to="/listCategory" style={{textDecoration:'none'}} ><li className="sidebarListItem">List Category</li></Link>
  
                  </div>
                </div>
                <div className="dropdown-container">
                  <li className="sidebarListItem">
                    <i className="far fa-clock"></i>
                    Sale
                  </li>
                  <div className="dropdown-content">
                    <Link to="addSale" style={{textDecoration:'none'}} > <li className="sidebarListItem">Add Sale</li></Link>
                    <Link to="listSale" style={{textDecoration:'none'}} > <li className="sidebarListItem">List Sale</li></Link>
  
                  </div>
                </div>
                <div className="dropdown-container">
                  <li className="sidebarListItem">
                    <i className="fas fa-qrcode"></i>
                    <Link to="/addImei" style={{textDecoration:'none',color:'#595555',marginTop:'-10px'}} ><li className="sidebarListItem">Add IMEI</li></Link>
                    
                  </li>
                 
                </div>
                <div className="dropdown-container">
                  <li className="sidebarListItem">
                    <i className="fas fa-sort-amount-down"></i>
                    Returns
                  </li>
                  <div className="dropdown-content">
                   <Link to="/addReturns" style={{textDecoration:'none'}} > <li className="sidebarListItem">Add Returns</li></Link>
                   <Link to="/listReturns" style={{textDecoration:'none'}} > <li className="sidebarListItem">List Returns</li></Link>
                   
                  </div>
                </div>
                <div className="dropdown-container">
                  <li className="sidebarListItem">
                    <i className="fas fa-user-friends"></i>
                    People
                  </li>
                  <div className="dropdown-content">
                    <li className="sidebarListItem">  Add Customers</li>
                    <li className="sidebarListItem" >List Customers</li>
                    <li className="sidebarListItem" >Add Users</li>
                    <li className="sidebarListItem" >List Users</li>
                  </div>
                </div>
                <div className="dropdown-container">
                  <li className="sidebarListItem">
                    <i className="fas fa-file-alt"></i>
                    Reports
                  </li>
                </div>
  
              </ul>
            </div>
          </div>
        </nav>
        <div className="logo">
          <h2>logo here</h2>
        </div>
        
        <div class="profile">
          {/* <li><a href="#"><i className="far fa-user-circle"></i></a></li> */}
         
        </div>
        <Switch>
        <Route exact path={path}>
          <myOrder/>
        </Route>
        <Route path={`${path}/addProduct`}>
            <manageProduct/>
        </Route>
        <Route path={`${path}/addAdmin`}>
            <addAdmin/>
        </Route>
      </Switch>
      </div>

        


    );
};

export default SideBar;