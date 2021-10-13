import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../assets/css/main.css';
import Book from '../assets/images/book.jpg';
import Crypto from '../assets/images/crypto.jpg';
import Draw from '../assets/images/draw.jpg';
import Fisherman from '../assets/images/Fisherman.jpg';
import SMBanner from '../assets/images/Opensea header.png';

function About() {
    return (
        <>
            <Header />
        <div className="about_headcontainer">
            <Container >
                <Row>
                    <Col lg={8}>
                        <div className="about_titlehead">
                            <h2>Social Media Influencer can Earn<br /> with Party Beavers</h2>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Image className="fisherman_img" src={Fisherman} fluid />
                    </Col>
                    <div className="btm_border">
                    </div>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="about_para">
                            <p className="sm_influencer_para">Thank you for coming to take a look at our private posting for Social Media influencers.<br />
                                We value your attention, and it will pay for you to be here.</p>
                            <p className="sm_influencer_para">Firstly, Party Beavers is a serious project — one you can be confident to promote. We are partnered with Infograins.com to provide a perfect and secure minting experience. Their experience in Unity development specifically for blockchain gaming and DeFi, also ensure the later phases of this project will materialize successfully. Party Beavers is chaotic, wacky, and pushing limits of art and imagination — the team behind it is well experienced and highly dedicated to success.</p>

                            <h4 className="sm_influencer_title">What you can earn as an influencer:</h4>
                            <p className="sm_influencer_para">The first 100 Party Beavers ever minted will be distributed to our followers on Social Media.</p>
                            <p className="sm_influencer_para">Twenty of these will go to super influencers like you in the following manner:</p>
                            <p className="sm_influencer_para">Top influencer (most followers) will get 5 Party Beavers (Launch value of approximately $200 USD each)<br />
                                Second:  Will get 4 Party Beavers<br />
                                Third:  Will get 3 Party Beavers<br />
                                Fourth:  Will get 2 Party Beavers<br />
                                The next 6 top Influencers will get 1 Party Beaver each.
                            </p>

                            <h4 className="sm_influencer_title">LOGS Token Airdrop</h4>
                            <p className="sm_influencer_para">Not formally announced, and an inside secret, all Party Beaver owners will get an airdrop of LOGS.
                                LOGS will be a Solana based cryptocurrency for in game rewards, purchases and gambling, as well as DeFi (staking, yield farming, and swapping).</p>
                            <p className="sm_influencer_para">Our top 20 influencers will receive 10% of the airdrop, proportionally to the number of followers they have.</p>
                            <p className="sm_influencer_para">Please do not leak this information — instead, get on board and wait for our tweets revealing the LOGS airdrop, and have the joy of your followers getting the info in a manner that coincides with our well developed campaign.</p>
                            <p className="sm_influencer_para">Thank you again for considering Party Beavers — please feel free to DM me, Dick Dam Stix (@DecentroMedia on twitter) if you have any questions.</p>
                            <p className="sm_influencer_para">I hope we will be partying together soon in the ALPHA OMEGA ETH party house!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>

            <Container>
                <Row>
                    <div className="about_btm_banner">
                        <Image src={SMBanner} fluid/>
                    </div>
                </Row>
            </Container>

            {/* <Container className="about_cardcontainer">
                <Row className="about_cardsrow">
                    <Card className="about_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Book} className="about_cardimg" alt="books" />
                        <div className="about_svg">
                            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" className="about_svgicon" id="SvgShp1-1c7asvgcontent" data-bbox="4.042 2.476 50 45.024" xmlns="http://www.w3.org/2000/svg" viewBox="4.042 2.476 50 45.024" role="img">
                                <g>
                                    <path d="M46.55 45.5c-.001-.028.005-.056.002-.084L45.42 33.303l-.599-.684C29.163 12.315 29.06 12.5 28.39 12.5h-.367l-.279.05c-.398.334-6.076 4.391-9.795 7.161l-.812.604L33.99 42.39l8.579 3.11H4.042v2h50v-2H46.55zM19.955 20.71c1.936-1.442 6.47-4.823 8.31-6.221 2.047 2.481 9.213 11.703 14.374 18.39l-8.302 6.668L19.955 20.71zm15.964 20.146l7.52-5.979.956 9.142-8.476-3.163z"></path>
                                    <path d="M15.622 18.743l11.77-8.522-.643-.818c-.146-.185-3.573-4.543-4.549-5.667-.904-1.041-1.963-1.26-2.691-1.26a3.34 3.34 0 0 0-1.124.184l-.155.074c-.132.077-3.248 1.918-5.637 3.989-1.856 1.609-2.14 2.615-2.167 3.373-.328 1.587 2.318 5.188 4.597 7.928l.599.719zm-3.204-8.546c.007-.173.03-.702 1.485-1.962 2.017-1.748 4.688-3.384 5.239-3.716.074-.018.205-.042.365-.042.461 0 .848.187 1.182.571.695.8 2.776 3.424 3.843 4.774l-8.561 6.198c-1.808-2.264-3.56-4.854-3.585-5.52.017-.083.027-.183.032-.303z"></path>
                                    <path d="M24.7 21.481c-.13-.172-.444-.153-.701.041l-.466.353c-.257.195-.361.492-.231.664l9.52 12.613c.13.172.444.153.701-.041l.466-.353c.257-.195.36-.492.23-.664L24.7 21.481z"></path>
                                </g>
                            </svg>
                        </div>
                        <Card.Title className="about_cardtitle">
                            I'm a Tittle
                        </Card.Title>
                        <Card.Text className="about_cardpara">
                            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                        </Card.Text>
                    </Card>
                    <Card className="about_card second" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Crypto} className="about_cardimg" alt="crypto-coin" />
                        <div className="about_svg">
                            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" className="about_svgicon" id="SvgShp1-1c7asvgcontent" data-bbox="4.042 2.476 50 45.024" xmlns="http://www.w3.org/2000/svg" viewBox="4.042 2.476 50 45.024" role="img">
                                <g>
                                    <path d="M46.55 45.5c-.001-.028.005-.056.002-.084L45.42 33.303l-.599-.684C29.163 12.315 29.06 12.5 28.39 12.5h-.367l-.279.05c-.398.334-6.076 4.391-9.795 7.161l-.812.604L33.99 42.39l8.579 3.11H4.042v2h50v-2H46.55zM19.955 20.71c1.936-1.442 6.47-4.823 8.31-6.221 2.047 2.481 9.213 11.703 14.374 18.39l-8.302 6.668L19.955 20.71zm15.964 20.146l7.52-5.979.956 9.142-8.476-3.163z"></path>
                                    <path d="M15.622 18.743l11.77-8.522-.643-.818c-.146-.185-3.573-4.543-4.549-5.667-.904-1.041-1.963-1.26-2.691-1.26a3.34 3.34 0 0 0-1.124.184l-.155.074c-.132.077-3.248 1.918-5.637 3.989-1.856 1.609-2.14 2.615-2.167 3.373-.328 1.587 2.318 5.188 4.597 7.928l.599.719zm-3.204-8.546c.007-.173.03-.702 1.485-1.962 2.017-1.748 4.688-3.384 5.239-3.716.074-.018.205-.042.365-.042.461 0 .848.187 1.182.571.695.8 2.776 3.424 3.843 4.774l-8.561 6.198c-1.808-2.264-3.56-4.854-3.585-5.52.017-.083.027-.183.032-.303z"></path>
                                    <path d="M24.7 21.481c-.13-.172-.444-.153-.701.041l-.466.353c-.257.195-.361.492-.231.664l9.52 12.613c.13.172.444.153.701-.041l.466-.353c.257-.195.36-.492.23-.664L24.7 21.481z"></path>
                                </g>
                            </svg>
                        </div>
                        <Card.Title className="about_cardtitle">
                            I'm a Tittle
                        </Card.Title>
                        <Card.Text className="about_cardpara">
                            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                        </Card.Text>
                    </Card>
                    <Card className="about_card third" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Draw} className="about_cardimg" alt="draw" />
                        <div className="about_svg">
                            <svg fill="#fff" preserveAspectRatio="xMidYMid meet" className="about_svgicon" id="SvgShp1-1c7asvgcontent" data-bbox="4.042 2.476 50 45.024" xmlns="http://www.w3.org/2000/svg" viewBox="4.042 2.476 50 45.024" role="img">
                                <g>
                                    <path d="M46.55 45.5c-.001-.028.005-.056.002-.084L45.42 33.303l-.599-.684C29.163 12.315 29.06 12.5 28.39 12.5h-.367l-.279.05c-.398.334-6.076 4.391-9.795 7.161l-.812.604L33.99 42.39l8.579 3.11H4.042v2h50v-2H46.55zM19.955 20.71c1.936-1.442 6.47-4.823 8.31-6.221 2.047 2.481 9.213 11.703 14.374 18.39l-8.302 6.668L19.955 20.71zm15.964 20.146l7.52-5.979.956 9.142-8.476-3.163z"></path>
                                    <path d="M15.622 18.743l11.77-8.522-.643-.818c-.146-.185-3.573-4.543-4.549-5.667-.904-1.041-1.963-1.26-2.691-1.26a3.34 3.34 0 0 0-1.124.184l-.155.074c-.132.077-3.248 1.918-5.637 3.989-1.856 1.609-2.14 2.615-2.167 3.373-.328 1.587 2.318 5.188 4.597 7.928l.599.719zm-3.204-8.546c.007-.173.03-.702 1.485-1.962 2.017-1.748 4.688-3.384 5.239-3.716.074-.018.205-.042.365-.042.461 0 .848.187 1.182.571.695.8 2.776 3.424 3.843 4.774l-8.561 6.198c-1.808-2.264-3.56-4.854-3.585-5.52.017-.083.027-.183.032-.303z"></path>
                                    <path d="M24.7 21.481c-.13-.172-.444-.153-.701.041l-.466.353c-.257.195-.361.492-.231.664l9.52 12.613c.13.172.444.153.701-.041l.466-.353c.257-.195.36-.492.23-.664L24.7 21.481z"></path>
                                </g>
                            </svg>
                        </div>
                        <Card.Title className="about_cardtitle">
                            I'm a Tittle
                        </Card.Title>
                        <Card.Text className="about_cardpara">
                            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                        </Card.Text>
                    </Card>
                </Row>
            </Container> */}

            <Footer />
        </>
    )
};

export default About;