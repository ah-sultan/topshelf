import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

import logo from '../../asserts/img/footer/logo.png'
import master from '../../asserts/img/footer/mastercard.png'
import visaCard from '../../asserts/img/footer/visa-card.png'
import bitcoin from '../../asserts/img/footer/bitcoin.png'
import intetrac from '../../asserts/img/footer/intetrac.png'


const FooterSection = styled.div`
background: linear-gradient(180deg, #1A1E26 0%, #01100B 100%);
padding: 380px 0 64px;

@media (max-width: 575.98px) {
 padding-top: 280px;   
}
`
const FooterText = styled.p`
    max-width: 276px;
    color: #9D9EA2 !important;

    @media (max-width: 1199.98px) {
        max-width: 100%;
    }
`
const Email = styled.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #9D9EA2;
    margin-bottom: 40px;
    &:hover{
        color: var(--primary-color);
    }
`

const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid #46494F;

    @media (max-width: 991.98px) {
       flex-direction: column;
       row-gap: 40px;
       align-items : flex-start;
    }
`

function Footer() {
    return (
        <>
            <FooterSection>
                <Container>
                    <div className="contact mb-64">
                        <Row>
                            <Col xl={4} lg={8}>
                                <img src={logo} alt="Logo" />
                                <FooterText className="footer-text fs-16 mt-24 mb-32">#1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.</FooterText>
                            </Col>
                            <Col xl={8} lg={12}>
                                <Row>
                                    <h5 className="text--white fs-20 fw-medium lh-150 mb-24">QUICK LINK</h5>
                                    <Col md={6}>
                                        <ul className="contact-nav p-0">
                                            <li><a href="/">Track Your Order</a></li>
                                            <li><a href="/">Shop All</a></li>
                                            <li><a href="/">Flower</a></li>
                                            <li><a href="/">Edibles</a></li>
                                            <li><a href="/">Concentrates</a></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="contact-nav p-0">
                                            <li><a href="/">Mushrooms</a></li>
                                            <li><a href="/">Promotions / Bundles</a></li>
                                            <li><a href="/">Support</a></li>
                                            <li><a href="/">Reward</a></li>
                                            <li><a href="/">Blog</a></li>
                                            <li><a href="/">Shipping Faq</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        <h5 className="text--white fs-20 fw-medium lh-150 mb-24">QUICK LINK</h5>
                                        <Email href="/">info@topshelfbc.cc</Email>
                                    </Col>
                                </Row>
                                <Row>
                                    <h5 className="text--white fs-20 fw-medium lh-150 mb-24 mt-40">MORE</h5>
                                    <Col md={6}>
                                        <ul className="contact-nav p-0">
                                            <li><a href="/">Buy weed online in Canada</a></li>
                                            <li><a href="/">Buy weed online in Prince Edward Island</a></li>
                                            <li><a href="/">Buy weed online in New Brunswick</a></li>
                                            <li><a href="/">Buy weed online in Northwest Territories</a></li>
                                            <li><a href="/">Buy weed online in Saskatchewan</a></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="contact-nav p-0">
                                            <li ><a href="/">Buy weed online in Manitoba</a></li>
                                            <li><a href="/">Buy weed online in Quitebec</a></li>
                                            <li><a href="/">Buy weed online in British Columbia</a></li>
                                            <li><a href="/">Buy weed online in Ontario</a></li>
                                            <li><a href="/">Buy weed online in Alberta</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="mt-24">
                                        <img className="mr-16" src={master} alt="master Card" />
                                        <img className="mr-16" src={visaCard} alt="Visa Card" />
                                        <img className="mr-16" src={bitcoin} alt="Bitcoin" />
                                        <img className="mr-16" src={intetrac} alt="Interac" />
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Copyright>
                        <ul className="p-0 d-flex order-lg-last">
                            <li><a href="/" className="footer-text fs-14 mr-32 mr-xs-14">Out Of Stock</a></li>
                            <li><a href="/" className="footer-text fs-14 mr-32 mr-xs-14">Privacy Policy</a></li>
                            <li><a href="/" className="footer-text fs-14">Terms & Conditions</a></li>
                        </ul>
                        <p className="footer-text fs-16 order-lg-first">© 2022 Top Shelf BC. All Rights Reserved. </p>
                    </Copyright>
                </Container>
            </FooterSection>
        </>
    )
}

export default Footer