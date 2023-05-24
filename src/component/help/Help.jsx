import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import healthIcon from '../../asserts/img/help/health.png'
import shopIcon from '../../asserts/img/help/shop.png'
import paymentIcon from '../../asserts/img/help/payment.png'
import relaxIcon from '../../asserts/img/help/relax.png'


const HelpSection = styled.div`
    padding: 296px 0 112px;
    background : #01100B;

    @media (max-width: 767.98px) {
        padding: 183px 0 64px;
    }
`
const Title = styled.h2`
    max-width: 948px;
    margin: 0 auto 24px;
`

const Description = styled.p`
    max-width: 790px;
    margin: 0 auto 9px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #9D9EA2;
`
const Button = styled.a`
    padding: 20px 56px;
    text-decoration: none;
    margin-top: 80px;

    &:hover{
        padding: 20px 56px; 
    }
     
`

function Help() {
    return (
        <>
            <HelpSection>
                <Container>
                    <div className="header-section ">
                        <Title className="section-title text-white mb-4 text-center">HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA</Title>
                        <Description>Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.</Description>
                    </div>
                    <div className="card-section">
                        <Row className="gx-32px">
                            <Col md={6}>
                                <HelpCard cardId="1" cardIcon={healthIcon} cardTitle="REGISTER" cardText="Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered." />
                            </Col>
                            <Col md={6}>
                                <HelpCard cardId="2" cardIcon={shopIcon} cardTitle="SHOP" cardText="Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered." />
                            </Col>
                            <Col md={6}>
                                <HelpCard cardId="3" cardIcon={paymentIcon} cardTitle="MAKE PAYMENT" cardText="Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered." />
                            </Col>
                            <Col md={6}>
                                <HelpCard cardId="4" cardIcon={relaxIcon} cardTitle="RELAX" cardText="Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered." />
                            </Col>
                        </Row>
                    </div>
                    <div className="text-center">
                        <Button className="btn--primary">Choose your Weed</Button>
                    </div>
                </Container>
            </HelpSection>
        </>
    )
}

export default Help


const CardId = styled.div`
    position: absolute;
    top: 0;
    left: 128px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
`
const CardText = styled.p`
    color: #9D9EA2;
    max-width: 548px;
`

function HelpCard(props) {
    return (
        <div className="mt-64 text-center position-relative">
            <CardId><span className="text--secondary">{props.cardId}</span></CardId>
            <img src={props.cardIcon} alt="Icon" />
            <h4 className="card-title mb-4 mt-4 text--white">{props.cardTitle}</h4>
            <CardText className="card-description mx-auto">{props.cardText}</CardText>
        </div>
    )
}