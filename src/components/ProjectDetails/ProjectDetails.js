import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        
                        
                        <Col lg={6} md={6} sm={12}>
                            <div className="serviceName text-center">
                                <img
                                    src="https://image.freepik.com/free-photo/little-girl-studying-her-tablet-with-copy-space_23-2148572274.jpg"
                                    alt=""/>
                            
                            </div>
                        </Col>
                        
                        <Col lg={6} md={6} sm={12}>
                            <div className=" text-center">
    
                                <h2 className="serviceName">Foll Bazar</h2>
                                <p className="serviceDescription">Complete e-commerce app solution for selling fruit online. According to build quality,
                                    data loading speed this is the best one</p>
    
                                <ul>
                                    <li className="serviceDescription">Admin Can Add, Edit, Delete Product Dynamically</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                </ul>
                                <Button variant="primary">More Info</Button>

                            </div>
                        </Col>
                    
                    
                    </Row>
                </Container>
            
            </Fragment>
        );
    }
}

export default ProjectDetails;