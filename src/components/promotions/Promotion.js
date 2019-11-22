import React from 'react'
import PromoCard from "./PromoCard"
import {Container} from "@material-ui/core"
import {ToggleButton,ToggleButtonGroup} from '@material-ui/lab'
import {Row,Col} from 'react-bootstrap'

class Promotion extends React.Component{

    render(){
        return (
            <div className="section-container bg-white">
                <Container>
                    <h4 className="section-title clearfix">
                        <span className="text-theme-gradient">Exclusive promotions</span>
                        <small>from 25 September 2016 - 1 January 2017</small>
                        <ToggleButtonGroup size="small" className="pull-right">
                            <ToggleButton size="small" value="view-all">
                                VIEW ALL
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </h4>
                    <Row className="row-space-10">
                        <Col md={6} xs={12}>
                            <PromoCard size="lg" align=""/>
                        </Col>
                        <Col md={3} xs={6}>
                            <PromoCard size="" align="center"/>
                            <PromoCard size="" align="left"/>
                        </Col>
                       
                        <Col md={3} xs={6}>
                            <PromoCard size="" align="right"/>
                            <PromoCard size="" align="center"/>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Promotion;