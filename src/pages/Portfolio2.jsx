import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../assets/css/main.css';
import { Container, Row, Col, Carousel } from "react-bootstrap";

import Slide1 from '../assets/images/carousel.png';


function Portfolio2() {


    return (
        <>
            <Header />

            <Container className="portfolio2_container">
                <Row>
                    <Col lg={12}>
                        <div className="portfolio2_titlediv">
                            <h2>Portfolio 2</h2>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="portfolio2_paradiv">
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="portfolio2_slidcontainer">
                <Row>
                    <div className>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slide1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slide1}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Slide1}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default Portfolio2;