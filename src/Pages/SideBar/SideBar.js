import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useAuth } from '../Contexts/AuthProvider';
import './SideBar.css';

const SideBar = () => {

    let { url } = useRouteMatch();
    const { logout } = useAuth();

    const { currentUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://lit-waters-88932.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: currentUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [currentUser.email])

    return (
        <>
            <div class="menubar">
                <input type="checkbox" id="btn" hidden />
                <label for="btn" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </label>

                <nav id="sidebar">
                    <div className="sidebar_logo">
                        <img src={logo} alt="" className="img-fluid" />
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <ul className="sidebarList">

                                {isAdmin ?
                                    <>  <div className="dropdown-container">
                                        <Link to={`${url}/manageOrder`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem ">
                                            <i class="fas fa-border-none color-fruit"></i>
                                            Manage Orders
                                        </li></Link>
                                    </div>
                                        <div className="dropdown-container">
                                            <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem ">
                                                <i class="fab fa-product-hunt color-fruit"></i>
                                                Add Product
                                            </li></Link>
                                        </div>
                                        <div className="dropdown-container">
                                            <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem ">
                                                <i class="fas fa-user-friends color-fruit"></i>
                                                Make Admin
                                            </li></Link>
                                        </div>
                                        <div className="dropdown-container">
                                            <Link to={`${url}/manageProduct`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem ">
                                                <i class="fas fa-border-all color-fruit"></i>
                                                Manage Product
                                            </li></Link>
                                        </div>

                                    </> :

                                    <>
                                        <div className="dropdown-container">
                                            <Link to={`${url}/myOrder`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem active">
                                                <i className="fas fa-shopping-bag color-fruit"></i>
                                                My Order
                                            </li></Link>

                                        </div>
                                        <div className="dropdown-container">
                                            <Link to={`${url}/review`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem ">
                                                <i className="fas fa-comments color-fruit"></i>
                                                Review
                                            </li></Link>

                                        </div>
                                        <div className="dropdown-container">
                                            <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: '#000' }} > <li className="sidebarListItem ">
                                                <i className="fas fa-money-bill-alt color-fruit"></i>
                                                Pay
                                            </li></Link>
                                        </div></>

                                }

                                <div className="d-flex " style={{ marginTop: '60%' }}>

                                    <Link onClick={logout} to="/" >  <i className="fas fa-sign-out-alt color-fruit fs-15"></i></Link>
                                    <Link to="/home" className="ms-auto"> <i className="fas fa-home color-fruit  fs-15"></i></Link>
                                </div>

                            </ul>
                        </div>
                    </div>

                </nav>

            </div>

        </>
    );
};

export default SideBar;