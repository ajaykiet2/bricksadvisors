import React from 'react'
import {Container} from "@material-ui/core"
import {Row, Col} from 'react-bootstrap'
import {PageHeader} from '../widgets'
let About = () => {
    return (
        <React.Fragment>
            <PageHeader title="ABOUT US"/>
            <div className="section-container bg-white">
                <Container>
                    <div className="about-us-content">
                        <h2 className="title text-center text-theme-gradient">What we do?</h2>
                        <p className="desc text-center">
                            We provides the best consultancy and best deals in real estate market <br/>with full transparancy and suggestions. We always make happy to our customers. 
                        </p>
                        <Row>
                            <Col md={4} sm={4}>
                                <div className="service">
                                    <div className="icon text-primary"><i className="text-theme-gradient fa fa-comments"></i></div>
                                    <div className="info">
                                        <h4 className="title">1. Consultancy</h4>
                                        <p className="desc">Provides best cunsultancy and suggestions according to customer budget. We provides many options for customers choices.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={4}>
                                <div className="service">
                                    <div className="icon text-primary"><i className="text-theme-gradient fa fa-car"></i></div>
                                    <div className="info">
                                        <h4 className="title">2. Site Visits</h4>
                                        <p className="desc">We provides free site visit to facilitate our customers. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={4}>
                                <div className="service">
                                    <div className="icon text-primary"><i className="text-theme-gradient fa fa-handshake"></i></div>
                                    <div className="info">
                                        <h4 className="title">3. Best Deals</h4>
                                        <p className="desc">Quisque gravida metus in sollicitudin feugiat. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={4} sm={4}>
                                <div className="service">
                                    <div className="icon text-primary"><i className="text-theme-gradient fa fa-file-archive"></i></div>
                                    <div className="info">
                                        <h4 className="title">4. Documentation</h4>
                                        <p className="desc">Etiam nulla turpis, gravida et orci ac, viverra commodo ipsum. Donec nec mauris faucibus, congue nisi sit amet, lobortis arcu.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={4}>
                                <div className="service">
                                    <div className="icon text-primary"><i className="text-theme-gradient fa fa-university"></i></div>
                                    <div className="info">
                                        <h4 className="title">5. Loans</h4>
                                        <p className="desc">Ut vel laoreet tortor. Donec venenatis ex velit, eget bibendum purus accumsan cursus. Curabitur pulvinar iaculis diam.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={4}>
                                <div className="service">
                                    <div className="icon text-primary"><i className="text-theme-gradient fa fa-braille"></i></div>
                                    <div className="info">
                                        <h4 className="title">6. Interior Design</h4>
                                        <p className="desc">Integer consectetur, massa id mattis tincidunt, sapien erat malesuada turpis, nec vehicula lacus felis nec libero. Fusce non lorem nisl.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default About;