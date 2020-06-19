import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Col, Container, Row} from "react-bootstrap";


class ClientSays extends Component {
    render() {
        var settings = {
            autoplaySpeed: 3000,
            autoPlay: true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center">
                                <Col>
                                    <img className="circleImage"
                                         src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-1/p160x160/91780935_1932501890215907_8438625436782559232_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEXtHYtU83kMIdze-Kgmc169FsYDZlMTq_0WxgNmUxOr7KBLu3Ke7bYBErbbAA8e2JStk7N9R7vc6Txo8eNaLRy&_nc_ohc=jmgnd2QYPWkAX8ycidV&_nc_ht=scontent-maa2-2.xx&_nc_tp=6&oh=e0318bb1ff609b37b425f7700243fae3&oe=5EBFAD8D"/>
                                    <h4 className="">Web Development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, obcaecati.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officiis!</p>

                                </Col>


                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage"
                                         src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-1/p160x160/91780935_1932501890215907_8438625436782559232_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEXtHYtU83kMIdze-Kgmc169FsYDZlMTq_0WxgNmUxOr7KBLu3Ke7bYBErbbAA8e2JStk7N9R7vc6Txo8eNaLRy&_nc_ohc=jmgnd2QYPWkAX8ycidV&_nc_ht=scontent-maa2-2.xx&_nc_tp=6&oh=e0318bb1ff609b37b425f7700243fae3&oe=5EBFAD8D"/>
                                    <h4 className="">Web Development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, obcaecati.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officiis!</p>

                                </Col>


                            </Row>
                        </div>
                        <div>
                            <Row className="text-center">
                                <Col>
                                    <img className="circleImage"
                                         src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-1/p160x160/91780935_1932501890215907_8438625436782559232_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeEXtHYtU83kMIdze-Kgmc169FsYDZlMTq_0WxgNmUxOr7KBLu3Ke7bYBErbbAA8e2JStk7N9R7vc6Txo8eNaLRy&_nc_ohc=jmgnd2QYPWkAX8ycidV&_nc_ht=scontent-maa2-2.xx&_nc_tp=6&oh=e0318bb1ff609b37b425f7700243fae3&oe=5EBFAD8D"/>
                                    <h4 className="">Web Development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, obcaecati.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officiis!</p>

                                </Col>


                            </Row>
                        </div>
                    </Slider>


                </Container>

            </Fragment>
        );
    }
}

export default ClientSays;