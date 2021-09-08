import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../assets/css/main.css';
import { Container, Row, Col } from "react-bootstrap";

function Portfolio1() {
    return (
        <>
            <Header />

            <Container className="portfolio1_container">
                <Row>
                    <Col lg={12}>
                        <div className="portfolio1_titlediv">
                            <h2>Portfolio 1</h2>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="portfolio1_paradiv">
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default Portfolio1;