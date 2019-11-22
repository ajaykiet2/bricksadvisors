import React from 'react'
import {PageHeader} from '../widgets'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import Container from "@material-ui/core/Container"
const Contact = (props) => {
    return (
        <>
        <PageHeader title="CONTACT US" />
        <div className="section-container p-t-20 bg-silver">
            <Container>
                <Row className="row-space-30">
                    <Col md={8}>
                        <h4 className="m-t-0">Contact Form</h4>
                        <p className="m-b-30 f-s-13">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis tortor justo, elementum volutpat ante porta eu. 
                            Sed eget tellus neque. Nam feugiat magna turpis. Vestibulum pharetra nibh et pretium efficitur. Donec porta sollicitudin laoreet. 
                            Sed a condimentum urna. Curabitur placerat ornare venenatis. Cras iaculis venenatis imperdiet.
                        </p>
                        <form className="form-horizontal" name="contact_us_form" action="https://seantheme.com/color-admin-v4.3/frontend/e-commerce/contact_us.html" method="POST">
                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-lg-right">Name <span className="text-danger">*</span></label>
                                <div className="col-md-7">
                                    <input type="text" className="form-control" name="name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-lg-right">Mobile <span className="text-danger">*</span></label>
                                <div className="col-md-7">
                                    <input type="text" className="form-control" name="mobile" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-lg-right">Email <span className="text-danger">*</span></label>
                                <div className="col-md-7">
                                    <input type="text" className="form-control" name="email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-lg-right">Subject <span className="text-danger">*</span></label>
                                <div className="col-md-7">
                                    <input type="text" className="form-control" name="subject" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-lg-right">Message <span className="text-danger">*</span></label>
                                <div className="col-md-7">
                                    <textarea className="form-control" rows="10" name="message"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-3"></label>
                                <div className="col-md-7">
                                    <button type="submit" className="btn btn-primary btn-lg"><i className="fa fa-paper-plane"></i> Send Message</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col md={4}>
                        <h4 className="m-t-0">Our Contacts</h4>
                        <div className="embed-responsive embed-responsive-16by9 m-b-15">
                            <iframe className="embed-responsive-item" title="Our Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3306.9584799260138!2d-118.49437019999998!3d34.019276700000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cedd1266ff%3A0x1ffe328381544853!2sGoogle+Inc!5e0!3m2!1sen!2s!4v1435718319426" allowfullscreen=""></iframe>
                        </div>
                        <div><b>Bricksadvisors Pvt. Ltd.</b></div>
                        <p className="m-b-15">
                            795 Folsom Ave, Suite 600<br/>
                            San Francisco, CA 94107<br/>
                            P: (123) 456-7890<br/>
                        </p>
                        <div><b>Email</b></div>
                        <p className="m-b-15">
                            <Link to="mailto:hello@emailaddress.com" className="text-inverse">info@seantheme.com</Link><br/>
                            <Link to="mailto:hello@emailaddress.com" className="text-inverse">business@seantheme.com</Link><br/>
                            <Link to="mailto:hello@emailaddress.com" className="text-inverse">support@seantheme.com</Link><br/>
                        </p>
                        <div className="m-b-5"><b>Social Network</b></div>
                        <p className="m-b-15">
                            <Link to="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-facebook"></i></Link>
                            <Link to="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-google-plus"></i></Link>
                            <Link to="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-instagram"></i></Link>
                            <Link to="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-dribbble"></i></Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Contact;