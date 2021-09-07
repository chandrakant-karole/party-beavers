import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer(){
    return(
        <>
            <Container>
                <Row className="footer_div">
                    <div>
                        <p>© 2023 by Party Beavers and the NFT Factory Canada</p>
                        <div className="footericon_div">
                            <div className="facebook_div">
                                <a href="javascript:;">
                                    <FontAwesomeIcon className="footer_icon" icon={faFacebookF}/>
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
                    </div>
                </Row>
            </Container>
        </>
    )
};

export default Footer;
