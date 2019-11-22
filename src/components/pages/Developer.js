import React from 'react'
import Container from "@material-ui/core/Container"
import {Row, Col} from 'react-bootstrap'
import {PageHeader} from '../widgets'
import {Link} from 'react-router-dom'
const Developer = (props) => {
    return (
        <>
        <PageHeader title="AJAY KUMAR - THE CODING MACHINE" />
            <div className="section-container">
                <Container>
                    <div className="account-container">
                        <div className="account-sidebar">
                            <div className="account-sidebar-cover">
                                <img src="/images/cover/cover-14.jpg" alt="" />
                            </div>
                            <div className="account-sidebar-content">
                                <h4>Ajay Kumar <p style={{fontSize: "12px"}}>Fullstack Developer</p></h4>
                                <p>A software engineer who developed this application. He is expert in engineering of softwares.</p>
                                <p>He is able to work on many new technologies.</p>
                                <hr style={{borderTop:"1px solid #FFF"}}/>
                                <h4>Profile</h4>
                                <p>
                                    <i className="fa fa-user"></i> Ajay Kumar<br/>
                                    <i className="fa fa-mobile"></i> +91-7042391949<br/>
                                    <i className="fa fa-envelope"></i> ajaykiet2@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="account-body">
                            <h4>[ Knowledge Stack ]</h4>
                            <hr/>
                            <Row>
                                <Col md={6}>
                                    <h4><i className="fab fa-gitlab fa-fw text-muted"></i> Frontend</h4>
                                    <ul className="nav nav-list">
                                        <li><Link to="/">HTML</Link></li>
                                        <li><Link to="/">JavaScript</Link></li>
                                        <li><Link to="/">CSS</Link></li>
                                        <li><Link to="/">JQuery</Link></li>
                                        <li><Link to="/">ReactJS</Link></li>
                                        <li><Link to="/">Vue.js</Link></li>
                                    </ul>
                                    <h4><i className="fa fa-cogs fa-fw text-muted"></i> Backend</h4>
                                    <ul className="nav nav-list">
                                        <li><Link to="/">NodeJS</Link></li>
                                        <li><Link to="/">Python</Link></li>
                                        <li><Link to="/">PHP</Link></li>
                                        <li><Link to="/">PERL</Link></li>
                                        <li><Link to="/">JAVA</Link></li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <h4><i className="fa fa-database fa-fw text-muted"></i> Database</h4>
                                    <ul className="nav nav-list">
                                        <li><Link to="/">MongoDB</Link></li>
                                        <li><Link to="/">MySql</Link></li>
                                        <li><Link to="/">PostgreSql</Link></li>
                                        <li><Link to="/">Radis</Link></li>
                                    </ul>
                                    <h4><i className="fa fa-server fa-fw text-muted"></i> Server</h4>
                                    <ul className="nav nav-list">
                                        <li><Link to="/">AWS</Link></li>
                                        <li><Link to="/">Apache</Link></li>
                                        <li><Link to="/">NGINX</Link></li>
                                    </ul>
                                    <h4><i className="fa fa-mobile fa-fw text-muted"></i> Mobile Development</h4>
                                    <ul className="nav nav-list">
                                        <li><Link to="/">Flutter</Link></li>
                                        <li><Link to="/">React Native</Link></li>
                                    </ul>   
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Developer;