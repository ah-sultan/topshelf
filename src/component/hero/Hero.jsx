import React from 'react'
import motion from 'framer-motion'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'


import heroBg from '../../asserts/img/hero/hero-bg.png'
import isometricCubics from '../../asserts/img/hero/isometric-cubics.png'
import product1 from '../../asserts/img/hero/product-1.png'
import product2 from '../../asserts/img/hero/product-2.png'
import product3 from '../../asserts/img/hero/product-3.png'

const HeroWrapper = styled.div`
    background: url(${heroBg});
    background-size: cover;
    background-repeat : no-repeat;
    background-position: center center;
    
`

const HeroSubTitle = styled.h3`
    letter-spacing: 4px;
    margin-bottom: 16px;

    @media (max-width : 575.98px) {
       margin-bottom: 12px;
    }
`

const HeroCtg = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.5px;
    color: var(--light-color);
    margin: 24px 0 102px;

    @media (max-width: 1199.98px) {
        margin: 24px 0px 64px;
    }

    @media (max-width : 575.98px) {
        margin: 16px 0px 40px;
        font-size: 16px;
    }
`

const Discount = styled.p`
    position: relative;
    margin-right: 64px;

    &::after{
        content: "";
        width: 2px;
        height: 16px;
        position: absolute;
        right: -32px;
        top: 10px;
        background: rgb(157, 158, 162);
        display: block;
    }

    @media (max-width : 575.98px) {
        margin-right: 48px;

        &::after{
            right: -24px;
            top: 6px;
        }
    }


`

const Button = styled.button`
    padding: 18px 56px;
    margin-top: 58px;
    &:hover{
        margin-top: 58px;
        padding: 18px 56px;
    }
`

const HeroImg = styled.img`
    top: 290px;
    left: -60px;

    @media (max-width: 1399.98px) {
        top: 273px;
        left: inherit;
        right: 0;
    }

    @media (max-width: 1199.98px) {
        max-width: 100%;
        top: 320px;
    }

    @media (max-width : 991.98px){
        position: static !important;
    }
`

const ProductImg1 = styled.img`
    position: absolute;
    top: 393px;
    left: 400px;

    @media (max-width:1399.98px) {
        top: 372px;
        left: 204px;
    }

    @media (max-width : 1199.98px) {
        max-width: 34%;
        top: 370px;
        left: 285px;
    }

    @media (max-width: 991.98px) {
        top: 107px;
        left: 440px;
    }

    @media (max-width : 767.98px) {
        top: 55px;
        left: 306px;
    }

    @media (max-width : 575.98px) {
        top: 19%;
        left: 58%;
    }

    

    
   
`

const ProductImg2 = styled.img`
    position: absolute;
    top: 424px;
    left: -25px;

    @media (max-width:1399.98px) {
        top: 399px;
        left: -212px;

    }

    @media (max-width : 1199.98px) {
        max-width: 34%;
        top: 373px;
        left: -4px;
        
    }
    
    @media (max-width : 991.98px) {
        top: 141px;
        left: 39px;
    }

    @media (max-width : 767.98px) {
        top: 80px;
        left: 0;
    }

    @media (max-width : 575.98px) {
        top: 24%;
    }
    
`
const ProductImg3 = styled.img`
    position: absolute;
    top: 170px;
    left: 157px;
    
    @media (max-width : 1399.98px) {
        position: absolute;
        top: 170px;
        left: -20px;

    }
    @media (max-width : 1199.98px) {
        top: 234px;
        left: 137px;
        max-width: 34%;
    }
    @media (max-width : 991.98px) {
        top: -110px;
        left: 214px;
    }
    @media (max-width : 767.98px) {
        top: -89px;
        left: 156px;
    }

    @media (max-width : 575.98px) {
        top: -26%;
        left: 30%;
    }
    
`

function Hero() {
    return (
        <>
            <HeroWrapper className="hero ">
                <Container>
                    <Row>
                        <Col xl={7} lg={6}>
                            <div className="hero-text pt-120 pb-118 pt-lg-100 pb-lg-100">
                                <HeroSubTitle className="fs-16 lh-150 text--accent fw-normal">
                                    BEST SELLER
                                </HeroSubTitle>
                                <h1 className="section-title text-white">BEST DISPENSARY TO BUY WEED ONLINE </h1>
                                <HeroCtg>
                                    Vitamins & Supplements
                                </HeroCtg>
                                <div className="product-info">
                                    <Discount className="fs-24 fs-normal text-white d-inline-block fs-xs-18">Get 25% off</Discount>
                                    <p className="fs-24 fs-normal text-white d-inline-block fs-xs-18">Free Shipping</p>
                                </div>
                                <Button className="btn--primary">Shop All</Button>
                            </div>
                        </Col>
                        <Col xl={5} lg={6}>
                            <div className="hero-img position-relative">
                                <HeroImg src={isometricCubics} alt="isometric Cubics" className="position-absolute left-0" />
                                <ProductImg1 src={product1} alt="Product Img 1" />
                                <ProductImg2 src={product2} alt="Product Img 1" />
                                <ProductImg3 src={product3} alt="Product Img 1" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </HeroWrapper>
        </>
    )
}

export default Hero