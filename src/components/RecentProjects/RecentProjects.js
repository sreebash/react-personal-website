import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle text-center">RECENT PROJECTS</h1>

                    <Row className="recentProectsCard">
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://image.freepik.com/free-photo/handsome-unshaven-male-freelancer-sitting-meet-cafe-showing-project-customer-talking-about-work-details_176420-9200.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="button-color" variant="primary"><Link className="button-color" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://image.freepik.com/free-photo/laughing-friends-looking-smartphone-park_23-2147845770.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="button-color" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://image.freepik.com/free-photo/stylish-teen-girl-writes-text-message-smartphone_8119-1752.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="button-color" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://image.freepik.com/free-photo/stylish-teen-girl-writes-text-message-smartphone_8119-1752.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="button-color" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://image.freepik.com/free-photo/people-leisure-friendship-communication-concept-happy-friends-drinking-beer-talking-clinking-glasses-bar-pub_155003-9239.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="button-color" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="button-color" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default RecentProjects;