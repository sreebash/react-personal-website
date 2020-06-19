import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";



class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4>Follow Me</h4>
                            <a className="socialLink" href=""><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className="socialLink" href=""><FontAwesomeIcon icon={faYoutube}/> Youtube</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify ">
                            <h4>Address</h4>
                            <p className="serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> sreebasjdas.1@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> (+88) 01622645056</p>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4>Information</h4>
                            <a href="">About Me</a><br/>
                            <a href="">My Resume</a><br/>
                            <a href="">Contact Me</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4>Legal</h4>
                            <a href="">Refund Policy</a>
                            <a href="">Terms And Condition</a>
                            <a href="">Privecy Policy</a>

                        </Col>

                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink {
" href="">Sreebash.com &copy; 2019-2020</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;