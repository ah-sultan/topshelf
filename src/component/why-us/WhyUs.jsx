import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import supportIcon from '../../asserts/img/why-us/support.png'
import sheildIcon from '../../asserts/img/why-us/sheild.png'
import diamondIcon from '../../asserts/img/why-us/diamond.png'
import carIcon from '../../asserts/img/why-us/car.png'
import badgeIcon from '../../asserts/img/why-us/badge.png'
import handIcon from '../../asserts/img/why-us/hand.png'


const Title = styled.h2`
    max-width : 789px;
`
const Description = styled.p`
max-width : 789px;
color: #717378;
`


function WhyUs() {
  return (
    <>
        <div className="why-us pb-120 pt-120 pb-sm-64 pt-xs-64">
            <Container>
                <div className="header-section">
                    <Title className="section-title text--dark mb-24">WHAT MAKES US THE <span className="text--accent">#1</span> ONLINE MARIJUANA DISPENSARY IN CANADA?</Title>
                    <Description className="fs-16 lh-150 text mb-64">When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the rest.</Description>
                </div>
                <div className="card-section">
                    <Row className="gx-32px">
                        <Col className="mb-40 mb-sm-24" md={6} xl={4}>
                        <ChooseCard  cardIcon={supportIcon} cardTitle="CUSTOMER SERVICE" cardText="If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120" />
                        </Col>
                        <Col className="mb-40 mb-sm-24" md={6} xl={4}>
                        <ChooseCard  cardIcon={sheildIcon} cardTitle="SECURITY" cardText="If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120" />
                        </Col>
                        <Col className="mb-40 mb-sm-24" md={6} xl={4}>
                        <ChooseCard cardIcon={diamondIcon} cardTitle="BEST VALUE" cardText="If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120" />
                        </Col>
                        <Col className="mb-md-40 mb-sm-24" md={6} xl={4}>
                        <ChooseCard cardIcon={carIcon} cardTitle="DELIVERY INSURANCE" cardText="If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120" />
                        </Col>
                        <Col className="mb-sm-24" md={6} xl={4}>
                        <ChooseCard cardIcon={badgeIcon} cardTitle="HIGHEST QUALITY" cardText="If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120" />
                        </Col>
                        <Col className="" md={6} xl={4}>
                        <ChooseCard cardIcon={handIcon} cardTitle="TRUST" cardText="If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </>
  )
}

export default WhyUs

const Card = styled.div`
    background: var(--white-color);
    border: 1px solid rgba(206, 207, 213, 0.4);
    border-radius: 12px;
    padding: 32px;
`

function ChooseCard(props) {
    return(
        <>
        <Card>
            <img src={props.cardIcon} alt="Card Icon" />
            <h4 className="card-title mt-32 mb-16">{props.cardTitle}</h4>
            <p className="card-description text--natural">{props.cardText}</p>
        </Card>
        </>
    )
}