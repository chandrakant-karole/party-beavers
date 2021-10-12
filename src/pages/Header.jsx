import React from "react";
import { Container, Row, Col, Image, Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/Logo (2).png';
import Discord from '../assets/images/discord logo.png';
import Tiktok from '../assets/images/tiktok logo.png';
import Hat from '../assets/images/HATHAIR_FlatBrimCap.png';
import SiteName from '../assets/images/PARTY BEAVERS TITLE outline.png';
import HeadLogo from '../assets/images/WEBSITE KEG BEAVER.png';

function Header() {
    return (
        <>
            <Container fluid className="headerCont_bg">
                <Row>
                    <Col lg={2}><Image src={Hat} fluid/></Col>
                    <Col lg={8} className="header_bg">
                        <div className="header">
                            <Image src={SiteName} fluid className="siteName"/>
                            <Image className="site_logo" src={HeadLogo} fluid />
                            <div className="headerbtn_div">
                                <a className="connect_wallet_btn" href="javascript:;">Connect Wallet</a>
                                <h6>Give-Aways on Each SM<br/>Platform!</h6>
                                <div className="social_bar_div">
                                    <ul>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Discord} /></a></li>
                                        <li><a className="twitter_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faTwitter} /></a></li>
                                        <li><a href="javascript:;"><Image className="tiktok_img" src={Tiktok} /></a></li>
                                        <li><a className="instagram_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faInstagram} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
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
                                <NavLink className="nav-link" to="/about_us">About</NavLink>
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
