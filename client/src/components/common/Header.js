import React from "react"
import Topbar from "./Topbar"
import {Row, Col, Nav} from "react-bootstrap";
import { Container } from "@material-ui/core";
import { SpeedDials } from '../widgets'
import {Link} from 'react-router-dom'
class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            locations: [],
            properties: [],
            builders:[]
        }
    }
    
    render() {
        return (
            <div>
                <Topbar />
                <div className="header">
                    <Container>
                        <div className="header-container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="header-logo">
                                    <Link to={"/"}>
                                        <img className="img img-responsive pull-left" alt="" src="/images/bricksadvisors.png" />
                                        <span className="text-theme-gradient">Bricksadvisors</span>
                                        <small className="text-theme-gradient">A real estate company</small>
                                    </Link>
                                </div>
                            </div>
                            <div className="header-nav">
                                <div className=" collapse navbar-collapse" id="navbar-collapse">
                                    <ul className="nav">
                                        <li><Link to={"/"}>HOME</Link></li>
                                        <li className="divider"></li>
                                        <li><Link to="/about-us">ABOUT US</Link></li>
                                        <li className="divider"></li>
                                        <li className="dropdown dropdown-full-width dropdown-hover">
                                            <Link to="#" data-toggle="dropdown">
                                                PROPERTIES 
                                                <b className="caret"></b>
                                                <span className="arrow top"></span>
                                            </Link>
                                            <div className="dropdown-menu p-0">
                                                <div className="dropdown-menu-container">
                                                    <div className="dropdown-menu-sidebar">
                                                        <h4 className="title">By Locations | <a href="/"><span className="label label-primary">SHOW ALL</span></a></h4>
                                                        <ul className="dropdown-menu-list">
                                                            <li><a href="product.html">Noida <i className="fa fa-angle-right pull-right"></i></a></li>
                                                            <li><a href="product.html">Delhi <i className="fa fa-angle-right pull-right"></i></a></li>
                                                            <li><a href="product.html">Gurgaon <i className="fa fa-angle-right pull-right"></i></a></li>
                                                            <li><a href="product.html">Noida Extension <i className="fa fa-angle-right pull-right"></i></a></li>
                                                            <li><a href="product.html">Ghaziabad <i className="fa fa-angle-right pull-right"></i></a></li>
                                                            <li><a href="product.html">Greater Noida <i className="fa fa-angle-right pull-right"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="dropdown-menu-content">
                                                        <h4 className="title">Popular Properties | <a href="/"><span className="label label-primary">SHOW ALL</span></a></h4>
                                                        <Row>
                                                            <Col md={3}>
                                                                <ul className="dropdown-menu-list">
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 7</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 6s</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 6</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 5s</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 5</a></li>
                                                                </ul>
                                                            </Col>
                                                            <Col md={3}>
                                                                <ul className="dropdown-menu-list">
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy S7</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy A9</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy J3</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy Note 5</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy S7</a></li>
                                                                </ul>
                                                            </Col>
                                                            <Col md={3}>
                                                                <ul className="dropdown-menu-list">
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 730</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 735</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 830</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 820</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia Icon</a></li>
                                                                </ul>
                                                            </Col>
                                                            <Col md={3}>
                                                                <ul className="dropdown-menu-list">
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia X</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia Z5</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia M5</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia C5</a></li>
                                                                    <li><a href="product_detail.html"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia C4</a></li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                        <h4 className="title">Top Builders | <a href="/"><span className="label label-primary">SHOW ALL</span></a></h4>
                                                        <ul className="dropdown-brand-list m-b-0">
                                                            <li><a href="product.html"><img src="/images/builders/logo/supertech.png" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/gaur.png" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/cherry-county.png" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/ajnaraindia.png" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/galaxy.jpg" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/ats.jpg" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/acegroup.jpg" alt="" /></a></li>
                                                            <li><a href="product.html"><img src="/images/builders/logo/mahagun.png" alt="" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="divider"></li>
                                        <li><Link to="/loans">LOANS</Link></li>
                                        <li className="divider"></li>
                                        <li><Link to="/interior-design">INTERIOR DESIGN</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-nav">
                                <Nav className="pull-right">
                                    <SpeedDials />
                                </Nav>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            
        )
    }
}

export default Header;