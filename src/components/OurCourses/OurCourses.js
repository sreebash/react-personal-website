import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class OurCourses extends Component {
    render() {
        return (
            
            <div>
                <Container className="courseTop">
                    <h1 className="serviceMainTitle text-center ">OUR COURSES</h1>

                    <Row className="courseTitle">
                        <Col>
                            <Row>
                                <Col>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"/>

                                </Col>

                                <Col>
                                    <h4>Web Development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, omnis.</p>
                                    <a className="courseDetails" href="">Details</a>


                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/isometric-young-people-are-engaged-web-design-website-page-development-template-landing-page-website_130740-76.jpg"/>

                                </Col>

                                <Col>
                                    <h4>Web Development</h4>
                                    <p>I build native and cross platfrom mobile app for your business app for your
                                        business Details</p>
                                    <a className="courseDetails" href="">Details</a>



                                </Col>
                            </Row>

                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/software-development-isometric-landing-page-programmer-working-with-computer-office-situation-web-application-programming-testing-frontend-backend-development-perspective-flat-design_9209-3190.jpg"/>
                                </Col>

                                <Col>
                                    <h4>Web Development</h4>
                                    <p>I build native and cross platfrom mobile app for your business app for your
                                        business Details</p>

                                    <a className="courseDetails" href="">Details</a>


                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"/>

                                </Col>

                                <Col>
                                    <h4>Web Development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
                                        perferendis?</p>
                                    <a className="courseDetails" href="">Details</a>


                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default OurCourses;