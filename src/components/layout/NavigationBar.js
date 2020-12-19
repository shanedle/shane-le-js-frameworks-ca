import React from "react"
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar className="navigationbar" variant="dark" expand="lg">
            <Container>
                <NavLink to="/" exact>
                    <Navbar.Brand className="navigationbar__brand">JS Frameworks CA</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navigationbar__toggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;