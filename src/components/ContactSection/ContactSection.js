import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-5">
                        <Col lg={6} md={6} sm={12} className="">
                            <h4 className="mt-5 serviceName">Quick Connect</h4>
                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text"  />
                                 
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Email address</Form.Label>
                                    <Form.Control type="email" />
                                 
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />


                                </Form.Group>
                                
                                
                                
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        
                        </Col>
                        
                        <Col lg={6} md={6} sm={12}>
                            <h4 className="mt-5 serviceName">Discuss Now</h4>
                            <p className="serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side,
                                Rajshahi</p>
                            <p className="serviceDescription"><FontAwesomeIcon
                                icon={faEnvelope}/> sreebasjdas.1@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> (+88) 01622645056</p>
                        
                        
                        </Col>
                    </Row>
                </Container>
            
            </Fragment>
        );
    }
}

export default ContactSection;