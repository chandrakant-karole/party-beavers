import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Tiktok from '../assets/images/tiktok.png';
import Insta from '../assets/images/insta.png';
import Twitter from '../assets/images/twiter.png';
import MLogo from '../assets/images/m-logo.png';
import Discord from '../assets/images/discord.png';

function Footer() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    {/* <div>
                        <p className="footer_para">© 2023 by Party Beavers and the NFT Factory Canada</p>
                        <div className="footericon_div">
                            <div className="facebook_div">
                                <a href="javascript:;">
                                </a>
                            </div>
                            <div className="twitter_div">
                                <a href="javascript:;">
                                    <FontAwesomeIcon className="footer_icon" icon={faTwitter}/>
                                </a>
                            </div>
                            <div className="instagram_div">
                                <a href="javascript:;">
                                    <FontAwesomeIcon className="footer_icon" icon={faInstagram}/>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <Col lg={8}>
                        <span className="footer_social_div">
                        <ul>
                                <li><a href="javascript:;"><Image className="tiktok_img" src={Tiktok} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Insta} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Twitter} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={MLogo} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Discord} /></a></li>
                                    {/* <li><a className="twitter_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faTwitter} /></a></li> */}
                                    {/* <li><a className="instagram_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faInstagram} /></a></li> */}
                                </ul>
                        </span>
                    </Col>
                    <Col lg={8}>
                        <p className="footer_txt">© 2021 by Party Beavers and the NFT Factory Canada</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Footer;
