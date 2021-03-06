import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo2.png';
import { useAuth } from '../../Contexts/AuthProvider';
import './NavBar.css'


const NavBar = () => {

    const {currentUser,logout} = useAuth();

    return (
        <div className="sticky-top">
            <Navbar bg="dark" variant="dark" className="" collapseOnSelect expand="lg">
                <Container>
                    <img className="ps-3 img-fluid" src={logo} alt="" />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end pe-3 ">
                        <Nav.Link as={HashLink} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/explore">Explore</Nav.Link>

                        <Nav.Link as={HashLink} className="text-white" to="#brand">Brands</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="#contact">Contact Us</Nav.Link>
                        {currentUser ? (
                                <NavDropdown title={<span className="text-white">{currentUser.displayName}</span>} id="basic-nav-dropdown">                                                                                             
                                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                            </NavDropdown>
                            ):(
                                   <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link> 
                            )}
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;