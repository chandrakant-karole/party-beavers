import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
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
        </>
    )
};

export default Header;
