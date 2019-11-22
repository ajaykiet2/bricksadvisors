import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from "@material-ui/core"
import {Carousel, Button} from "react-bootstrap"
class Banner extends React.Component{
    render(){
        return (
            <Carousel controls={false} wrap={true} fade={true}>
                <Carousel.Item style={{background: 'url(/images/slider/slider-1-cover.jpg) center 0 / cover no-repeat'}}>
                    <div className="overlay-box overlay-black"></div>
                    <Container>
                        <img 
                            src="/images/slider/consulting.png" 
                            className="product-img right bottom fadeInRight animated" 
                            alt="Consultancy" 
                        />
                    </Container>
                    <Carousel.Caption className="carousel-caption-left">
                        <Container>
                            <h3 className="title m-b-5 fadeInLeftBig animated">Consultancy</h3>
                            <p className="m-b-15 fadeInRightBig animated">The better way to understand the real estate.</p>
                            <div className="price m-b-30 fadeInLeftBig animated"><small>with</small> <span>CONFIDANCE</span></div>
                            <Link to="/contact-us">
                                <Button variant="outline-light" size="lg" className="fadeInRightBig animated">Contact Us</Button>
                            </Link>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{background: 'url(/images/slider/slider-2-cover.jpg) center 0 / cover no-repeat'}}>
                    <div className="overlay-box overlay-black"></div>
                    <Container>
                        <img 
                            src="/images/slider/best-deal.png" 
                            className="product-img left bottom fadeInRight animated" 
                            alt="Consultancy" 
                        />
                    </Container>
                    <Carousel.Caption className="carousel-caption-right">
                        <Container>
                            <h3 className="title m-b-5 fadeInUpBig animated">Best Deal</h3>
                            <p className="m-b-15 fadeInDownBig animated">Get best deal you never get before</p>
                            <div className="price fadeInUpBig animated"><small>with</small> <span>TRANSPARENCY</span></div>
                            <Link to="/contact-us">
                                <Button variant="outline-light" size="lg" className="fadeInDownBig animated">Contact Us</Button>
                            </Link>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{background: 'url(/images/slider/slider-3-cover.jpg) center 0 / cover no-repeat'}}>
                    <div className="overlay-box overlay-black"></div>
                    <Container>
                        <img 
                            src="/images/slider/documentation.png" 
                            className="product-img left bottom fadeInRight animated" 
                            alt="Consultancy" 
                        />
                    </Container>
                    <Carousel.Caption className="carousel-caption-right">
                        <Container>
                            <h3 className="title m-b-5 fadeInLeftBig animated">Documentation</h3>
                            <p className="m-b-15 fadeInRightBig animated">Overcome your stress about paper work</p>
                            <div className="price m-b-30 fadeInLeftBig animated"><small>with</small> <span>LEAGLIY</span></div>
                            <Link to="/contact-us">                            
                                <Button variant="outline-light" size="lg" className="fadeInRightBig animated">Contact Us</Button>
                            </Link>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Banner;