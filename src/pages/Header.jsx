import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import Logo from '../assets/images/Logo (2).png';
import Tiktok from '../assets/images/tiktok.png';
import Insta from '../assets/images/insta.png';
import Twitter from '../assets/images/twiter.png';
import MLogo from '../assets/images/m-logo.png';
import Discord from '../assets/images/discord.png';
// import Hat from '../assets/images/HATHAIR_FlatBrimCap.png';
import Paw from '../assets/images/Beaver Paw SCRATCHES RIP.png';
import SiteName from '../assets/images/PARTY BEAVERS TITLE outline.png';
import HeadLogo from '../assets/images/WEBSITE KEG BEAVER.png';

function Header() {
    return (
        <>
            <div className="headerCont_bg">
                <Container fluid>
                    <Row>
                        <Col lg={2}>
                            <div className="pawDiv">
                                <Image src={Paw} fluid />
                            </div>
                        </Col>
                        <Col lg={8} className="header_bg">
                            <div className="header">
                                <Image src={SiteName} fluid className="siteName" />
                                <Image className="site_logo" src={HeadLogo} fluid />
                                <div className="headerbtn_div">
                                    <a className="connect_wallet_btn" href="javascript:;">Connect Wallet</a>
                                    <h6>Giveaways on Each SM<br />Platform!</h6>
                                    <div className="social_bar_div">
                                        <ul>
                                            <li><a href="javascript:;"><Image className="tiktok_img" src={Tiktok} /></a></li>
                                            <li><a href="javascript:;"><Image className="discord_img" src={Insta} /></a></li>
                                            <li><a href="https://twitter.com/PartyBeavers?t=ltuno2tuDUyB9PTS0yDmvQ&s=08" target="_blank"><Image className="discord_img" src={Twitter} /></a></li>
                                            <li><a href="javascript:;"><Image className="discord_img" src={MLogo} /></a></li>
                                            <li><a href="javascript:;"><Image className="discord_img" src={Discord} /></a></li>
                                            {/* <li><a className="twitter_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faTwitter} /></a></li> */}
                                            {/* <li><a className="instagram_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faInstagram} /></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="pawDiv">
                                <Image src={Paw} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Navbar className="nav_main_div" bg="light" expand="lg">
                        <Navbar.Brand>
                            <Link className="navbar-brand" to="/">Party Beavers HQ</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="nav_container">
                            <Nav
                                className="mr-auto my-2 my-lg-0 navlist_div"
                                style={{ maxHeight: '300px' }}
                                navbarScroll
                            >
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/about" className="nav-link">About</Link>
                                <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><Link className="nav-link" to="/portfolio">Portfolio</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link className="nav-link" to="/portfolio1">Portfolio1</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link className="nav-link" to="/portfolio2">Portfolio2</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </>
    )
};

export default Header;
