import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Container, InputBase, Divider, IconButton } from '@material-ui/core';
import {Row, Col} from 'react-bootstrap'
const useStyles = makeStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "100%",
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
});
const Subscriber = ()=>{
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="section-container p-t-30 p-b-30">
                <Container>
                    <Row>
                        <Col md={4} sm={4}>
                            <div className="policy">
                                <div className="policy-icon"><i className="fa fa-comments"></i></div>
                                <div className="policy-info">
                                    <h4>Transparent Consultancy</h4>
                                    <p>Our experts suggests the best options for our customers.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="policy">
                                <div className="policy-icon"><i className="fa fa-car"></i></div>
                                <div className="policy-info">
                                    <h4>Free Site Visits</h4>
                                    <p>We help you to explore the many options to choose best one.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={4}>
                            <div className="policy">
                                <div className="policy-icon"><i className="fa fa-handshake"></i></div>
                                <div className="policy-info">
                                    <h4>Get Best Deal</h4>
                                    <p>We commit to our customers for the best deal in competetive market.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="subscribe" className="section-container bg-silver p-t-30 p-b-30">
                <Container>
                    <Row>
                        <Col md={6} sm={6}>
                            <div className="subscription">
                                <div className="subscription-intro">
                                    <h4> LET'S STAY IN TOUCH</h4>
                                    <p>Get updates on sales specials and more</p>
                                </div>
                                <div className="subscription-form">
                                <Paper className={classes.root}>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="john.doe@example.com"
                                        inputProps={{ 'aria-label': 'john.doe@example.com' }}
                                    />
                                    <Divider className={classes.divider} />
                                    <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
                                        <i className="fa fa-arrow-right"></i>
                                    </IconButton>
                                </Paper>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={6}>
                            <div className="social">
                                <div className="social-intro">
                                    <h4>FOLLOW US</h4>
                                    <p>We want to hear from you!</p>
                                </div>
                                <div className="social-list">
                                    <a href="/"><i className="fab fa-facebook"></i></a>
                                    <a href="/"><i className="fab fa-twitter"></i></a>
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                    <a href="/"><i className="fab fa-dribbble"></i></a>
                                    <a href="/"><i className="fab fa-google-plus"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}


export default Subscriber;

