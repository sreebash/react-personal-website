import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../asset/images/web.svg';
import mobileLogo from '../../asset/images/mobile.svg';
import graphicsLogo from '../../asset/images/graphics.svg';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>

                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo} alt=""/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut blanditiis,
                                    itaque iure numquam pariatur.</p>

                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobileLogo} alt=""/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut blanditiis,
                                    itaque iure numquam pariatur.</p>


                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo} alt=""/>
                                <h2 className="serviceName">Graphics Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut blanditiis,
                                    itaque iure numquam pariatur.</p>


                            </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Services;