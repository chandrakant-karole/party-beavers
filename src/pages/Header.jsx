import React from "react";
import { Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="header">
                            <div className="head_div">
                                <h1>Party Beavers HQ</h1>
                            </div>
                        </div>
                        <div className="headerbtn_div">
                            <a href="javascript:;">Connect Wallet</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Navbar className="nav_main_div" bg="light" expand="lg">
                        <Navbar.Brand><NavLink className="navbar-brand" to="/">Party Beavers HQ</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="nav_container">
                            <Nav
                                className="mr-auto my-2 my-lg-0 navlist_div"
                                style={{ maxHeight: '300px' }}
                                navbarScroll
                            >
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                                <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink className="nav-link" to="/portfolio1">Portfolio1</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink className="nav-link" to="/portfolio2">Portfolio2</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </>
    )
};

export default Header;
