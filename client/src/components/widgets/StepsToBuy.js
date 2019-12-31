import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { Container } from "@material-ui/core"
const StepsToBuy = () => {
    let steps = [
        {
            icon: "/images/services/select_property.png",
            title: "Search & Select Property"
        },
        {
            icon: "/images/services/meet-our-experts.png",
            title: "Discuss With Our Experts"
        },
        {
            icon: "/images/services/property_site.png",
            title: "Visit Your Property With Us"
        },
        {
            icon: "/images/services/buy_property.png",
            title: "Get Best Deal For Property"
        },
        {
            icon: "/images/services/loan_assistance.png",
            title: "Get Loan Assistance With Us"
        },
        {
            icon: "/images/services/customer_care_support.png",
            title: "Feel Free To Get Help Anytime"
        }
    ].map((step, idx) => {
        return (
            <Col lg={2} md={4} sm={4} xs={6} key={idx} className="text-center">
                <img className="img img-circle" alt="" src={step.icon}/>
                <p className="list-header">{idx+1}. {step.title}</p>
            </Col>
        );
    });

    return (
        <div className="section-container bg-white">
          <Container>
            <Col sm={12} className="box-centered service-steps">
              <Row>
                {steps}     
              </Row>
            </Col>
          </Container>
        </div>
    )
}

export default StepsToBuy;