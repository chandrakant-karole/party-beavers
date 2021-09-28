import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/Logo (2).png';
import Discord from '../assets/images/discord logo.png';
import Tiktok from '../assets/images/tiktok logo.png';

function Header() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}></Col>
                    <Col lg={6}>
                        <div className="header">
                            <Image className="site_logo" src={Logo} fluid />
                            <div className="headerbtn_div">
                                <h6>Party Beaver Give-Aways on Each Platform!</h6>
                                <div className="social_bar_div">
                                    <ul>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Discord} /></a></li>
                                        <li><a className="twitter_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faTwitter} /></a></li>
                                        <li><a href="javascript:;"><Image className="tiktok_img" src={Tiktok} /></a></li>
                                        <li><a className="instagram_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faInstagram} /></a></li>
                                    </ul>
                                </div>
                                <a className="connect_wallet_btn" href="javascript:;">Connect Wallet</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Header;
