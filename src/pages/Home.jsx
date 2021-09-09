import React from "react";
import Header from "./Header";
import Footer from './Footer';
import '../assets/css/main.css';
import '../assets/js/main.js';
import Dummy from '../assets/images/dummy.png';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <div className="home_titlediv">
                            <h2>Metaverse's craziest exclusive Frat House:<br />
                                The Mega Alpha Dam Beaver Party</h2>
                            <div className="home_tilesocial">
                                <div className="homefacebook_div">
                                    <a href="javascript:;">
                                        <FontAwesomeIcon className="homesocial_icon" icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className="hometwitter_div">
                                    <a href="javascript:;">
                                        <FontAwesomeIcon className="homesocial_icon" icon={faTwitter} />
                                    </a>
                                </div>
                                <div className="homeinstagram_div">
                                    <a href="javascript:;">
                                        <FontAwesomeIcon className="homesocial_icon" icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="homecard_div">
                    <Card className="home_card first" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} alt="characters-gif"/>
                        <Card.Title className="homecard_txt">GIF of characters
                            rapidly changing</Card.Title>
                        <div className="homecard_btm">
                            <p>10,000 Party Beavers
                                Generatively Designed NFTs
                                Totally ready to party!</p>
                        </div>
                    </Card>
                    <Card className="home_card second" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} alt="frat-house"/>
                        <Card.Title className="homecard_txt">Image
                            of the front of the
                            frat house.</Card.Title>
                        <div className="homecard_btm">
                            <p>Party Beaver NFT ownership grants you membership to the
                                MEGA ALPHA DAM Frat House
                                Are you ready to @#$%ing party in the metaverse?</p>
                        </div>
                    </Card>
                    <Card className="home_card third" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} alt="beavers"/>
                        <Card.Title className="homecard_txt">
                            <ul>
                                <li>Slide show of:</li>
                                <li>-beavers</li>
                                <li>- fishing</li>
                                <li>- DJing</li>
                                <li>- Funneling beers</li>
                                <li>- smashing a bong</li>
                            </ul>
                        </Card.Title>
                        <div className="homecard_btm">
                            <ul>
                                <li>Your NFT traits will impact:</li>
                                <li>- What you can do</li>
                                <li>- Your luck at games</li>
                                <li>- Strength in combat</li>
                                <li>- Your skill in sports</li>
                                <li>- Ability to funnel beers</li>
                                <li>- Ability to smash bongs</li>
                            </ul>
                        </div>
                    </Card>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="homebtn_div first">
                            <a className="btnOne" href="javascript:;">Connect Wallet</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className="homebtn_div second">
                        <a className="btnTwo" href="javascript:;">Mint a Party beaver</a>
                    </div>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <p className="homerangetxt_div">Select how hard you want to bash:</p>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Form.Range />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <div className="homecountd_txt">
                            <h2>Get Ready to Party</h2>
                        </div>
                    </Col>
                    <Col lg={12} sm={12}>
                        <div class="container">
                            <div id="countdown">
                                <ul>
                                    <li><span id="days"></span>days</li>
                                    <li><span id="hours"></span>Hours</li>
                                    <li><span id="minutes"></span>Minutes</li>
                                    <li><span id="seconds"></span>Seconds</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="homecountd_para">
                            <p>Bree is a spirited and standout font that takes its inspiration from handwriting. It's<br /> sure to grab your reader's attention, especially in short paragraphs.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="homerdmap_div">
                            <h3>Road Map:</h3>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default Home;