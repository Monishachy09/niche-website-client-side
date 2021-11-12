import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo2.png';
import './NavBar.css'


const NavBar = () => {
    return (
        <div className="pb-5">
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
<Container>
<img className="ps-3 img-fluid" src={logo} alt="" />
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end pe-3 ">
<Nav.Link as={HashLink} className="text-white" to="/home">Home</Nav.Link>
  <Nav.Link as={HashLink} className="text-white" to="/services#service">Section</Nav.Link>
  
  <Nav.Link as={HashLink} className="text-white" to="/login">Admin</Nav.Link> 
  <Nav.Link as={HashLink} className="text-white" to="/contact">Contact Us</Nav.Link>
  <NavDropdown title="Dropdown"  id="basic-nav-dropdown">
  <Nav.Link as={HashLink} className="text-dark" to="/dashboard">Dashboard</Nav.Link>
  <NavDropdown.Divider />  
  <NavDropdown.Item >Logout</NavDropdown.Item>
        </NavDropdown>
       
        <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
</Navbar.Collapse>

</Container>
</Navbar>

    </div>
    );
};

export default NavBar;