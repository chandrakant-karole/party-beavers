import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/main.css';


function About() {
    return (
        <>
            <Header />

            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>About</h2>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2>Service</h2>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Card className="home_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} />
                        <Card.Title>
                            I'm a Tittle
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card>
                    <Card className="home_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} />
                        <Card.Title>
                            I'm a Tittle
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card>
                    <Card className="home_card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} />
                        <Card.Title>
                            I'm a Tittle
                        </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default About;