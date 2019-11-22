import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Container } from '@material-ui/core';

const PageHeader = (props)=>{
    const title = props.title || "Welcome to Bricksadvisors";
    return (
        <React.Fragment>
            <div className="section-container page-header-container bg-black">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h1 className="page-header text-left"><b> {title} </b></h1>
                        </Col>
                    </Row>
                </Container>
                <div className="page-header-cover">
                    <img src="/images/cover/cover-15.jpg" alt="" />
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default PageHeader;
