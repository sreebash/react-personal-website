import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {Player, BigPlayButton} from 'video-react';
import ReactPlayer from "react-player";


class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,

        }
    }

    modalClose = () => this.setState({show:false})
    modalOpen = () => this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="serviceMainTitle">How I Do</p>
                                <p>First i analysis the requirement of project. According to the requirement i make a
                                    proper technical analysis, then i build a software architecture. According to the
                                    planning i start coding. Testing is also going on with coding. Final testing take
                                    place after finishing coding part. After successful implementation i provide 6 month
                                    free bug fixing service for corresponding project.</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen}
                                    className="playButton" icon={faPlayCircle}/></p>

                            </div>


                        </Col>

                    </Row>

                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;