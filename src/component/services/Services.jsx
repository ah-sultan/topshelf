import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Styled from 'styled-components'

import cars from '../../asserts/img/services/cars.svg'
import security from '../../asserts/img/services/security.svg'
import dollar from '../../asserts/img/services/dollar.svg'






const ServicesWrapper = Styled.div`
    background : #F2F6F4;
    padding : 80px 0 104px;

    @media (max-width: 575.98px){
        padding : 64px 0;
    }
`

function Services() {
    return (
        <ServicesWrapper>
            <Container>
                <Row>
                    <Col xl={4} lg={6}>
                        <ServiceCard cardIcon={cars} cardCaption="Reliable Shipping" cardText="Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!" />
                    </Col>
                    <Col xl={4} lg={6} className="mt-md-32">
                        <ServiceCard cardIcon={security} cardCaption="You’re Safe With Us" cardText="Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency." />
                    </Col>
                    <Col xl={4} lg={6} className="mt-md-32">
                        <ServiceCard cardIcon={dollar} cardCaption="Best Quality & Pricing" cardText="Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely" />
                    </Col>
                </Row>
            </Container>
        </ServicesWrapper>
    )
}

export default Services


function ServiceCard(props) {
    return (
        <>
            <div className='d-flex align-items-start column-gap-24 '>
                <div className="card-icon">
                    <img src={props.cardIcon} alt="Card Icon" className="w-xs-64"/>
                </div>
                <div className="card-info">
                    <h4 className='card-title mb-16 mb-xs-12' >{props.cardCaption}</h4>
                    <p className='card-description'>{props.cardText}</p>
                </div>
            </div>
        </>
    )
}