import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Map from './Map';
import { Container, Row, Form, Col, Button, FloatingLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <>
            <Header />

            <Container className="contact_container">
                <Row>
                    <div className="contact_title">
                        <h2>Contact Us</h2>
                    </div>
                </Row>
            </Container>

            <Container className="contact_maincontainer">
                <Row>
                    <div className="contact_contentdiv">
                        <div className="contact_topcontent">
                            <div className="contact_teldiv">
                                <ul>
                                    <li>Tel: 123-456-7890</li>
                                    <li>Fax: 123-456-7890</li>
                                </ul>
                            </div>
                            <div className="contact_addressdiv">
                                <p>500 Terry Francois Street<br /> San Francisco, CA 94158<br /> info@mysite.com</p>
                            </div>
                            <div className="contact_socialdiv">
                                <a href="javascript:;">
                                <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="javascript:;">
                                <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="javascript:;">
                                <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>

                        <div className="contact_formdiv">
                            <Form>
                                <Row className="mb-3 contact_formrow">
                                    <Form.Group as={Col} className="contactform_fields" controlId="formGridEmail">
                                        <Form.Label>Enter your Name</Form.Label>
                                        <Form.Control className="contactform_input" type="text" />

                                        <Form.Label>Enter your Email*</Form.Label>
                                        <Form.Control className="contactform_input" type="email" required />

                                        <Form.Label>Enter your Subject</Form.Label>
                                        <Form.Control className="contactform_input" type="text" />
                                    </Form.Group>

                                    <Form.Group as={Col} className="contactform_fields" controlId="formGridPassword">
                                        <Form.Label>Enter your Message</Form.Label>
                                        <FloatingLabel  >
                                            <Form.Control className="contactform_input"
                                                as="textarea"
                                                style={{ height: '172px' }}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>
                                <div className="contactform_btn">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>

                        <div className="contact_mapdiv">
                            <Map/>
                        </div>
                    </div>
                </Row>
            </Container>

            <Footer />
        </>
    )
};

export default Contact;