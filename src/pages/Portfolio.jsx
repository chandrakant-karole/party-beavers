import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Card } from 'react-bootstrap';
import PortfolioTwo from '../assets/images/portfolio2.webp';

function Portfolio() {
    return (
        <>
            <Header />

            <Container className="portfolio_container">
                <Row>
                    <Col lg={12}>
                        <div className="portfolio_headtxt">
                            <h2>Portfolios</h2>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="portfolio_para">
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="portfolio_cardcontainer">
                <Row className="portfolio_cardrow">
                    <Card className="home_card" style={{ width: '18rem' }}>
                            <a href="javascript:;">
                            <Card.Img variant="top" src={PortfolioTwo} />
                            </a>
                        <Card.Title className="portfolio_cardtitle">Portfolio 1</Card.Title>
                    </Card>
                    <Card className="home_card" style={{ width: '18rem' }}>
                        <a href="javascript:;">
                        <Card.Img variant="top" src={PortfolioTwo} />
                        </a>
                        <Card.Title className="portfolio_cardtitle">Portfolio 2</Card.Title>
                    </Card>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default Portfolio;