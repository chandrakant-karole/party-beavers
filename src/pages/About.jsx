import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/main.css';
import Book from '../assets/images/book.jpg';
import Crypto from '../assets/images/crypto.jpg';
import Draw from '../assets/images/draw.jpg';


function About() {
    return (
        <>
            <Header />

            <Container className="about_headcontainer">
                <Row>
                    <Col lg={12}>
                        <div className="about_titlehead">
                            <h2>About Us</h2>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="about_para">
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="about_servicecontainer">
                <Row>
                    <Col>
                        <div className="about_servicetxt">
                            <h2>Service</h2>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="about_cardcontainer">
                <Row className="about_cardsrow">
                    <Card className="about_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Book} className="about_cardimg" />
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
                    <Card className="about_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Crypto} className="about_cardimg" />
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
                    <Card className="about_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Draw} className="about_cardimg" />
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
            </Container>

            <Footer />
        </>
    )
};

export default About;