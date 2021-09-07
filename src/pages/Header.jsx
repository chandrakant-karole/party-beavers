import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

function Header(){
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="header">
                            <div className="head_div">
                                <h1>Party Beavers HQ</h1>
                            </div>
                        </div>
                        <div className="headerbtn_div">
                            <a href="javascript:;">Connect Wallet</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Header;
