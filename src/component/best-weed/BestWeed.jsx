import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation } from 'swiper';

import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import cardBg from '../../asserts/img/best-weed/card-bg.png'
import cardIcon from '../../asserts/img/best-weed/card-icon.png'
import ProductCard from '../product-card/ProductCard'

import Product from '../Product'
import { NextSlideBtn, PrevSlideBtn } from '../sliderBtn/SliderBtn';

const Title = styled.h2`
    max-width: 948px;

    @media (max-width: 1199.98px) {
        max-width: 550px;
    }
    
`
const Card = styled.div`
    max-width: 100%;
    background: url(${cardBg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 84px 32px;
    border-radius: 16px;
    text-align: center;
`
const CardText = styled.p`
    max-width: 216px;
    margin: 0 auto;
`

function BestWeed() {
    const [active, setActive] = useState('item1')

    useEffect(() => {


    })

    return (
        <>
            <div className="best-weed pt-120 pt-xs-64">
                <Container className="gx-xl-0">
                    <div className="header-section">
                        <Title className='section-title text-dark mx-auto text-center mb-64'>BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</Title>
                    </div>
                    <div className="filter-button mb-64">
                        <Row>
                            <Col lg={4}>
                                <button type="button" onClick={() => setActive('item1')} className={`btn--outline d-block w-100 ${active === 'item1' ? 'active' : undefined}`}>Best Sellers</button>
                            </Col>
                            <Col lg={4}>
                                <button type="button" onClick={() => setActive('item2')} className={`btn--outline d-block w-100 ${active === 'item2' ? 'active' : undefined}`}>Bundles & Promotions</button>
                            </Col>
                            <Col lg={4}>
                                <button type="button" onClick={() => setActive('item3')} className={`btn--outline d-block w-100 ${active === 'item3' ? 'active' : undefined}`}>On Sale</button>
                            </Col>
                        </Row>
                    </div>
                    <div className="card-section">
                        <Row>
                            <Col xs={12} md={6} lg={4}>
                                <Card>
                                    <img src={cardIcon} alt="card Icon" />
                                    <h4 className="fs-20 text--white fw-medium lh-150 mt-24">Shop our Best Sellers</h4>
                                    <CardText className="text-white fw-normal lh-150 mt-8 mb-20 fs-14">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </CardText>
                                    <a href="#" className="action--primary">View All</a>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} lg={8} className="mt-sm-32">
                                <div className={`${"item1" === active ? 'showTab' : 'hideTab'}`}>
                                    <div className="position-relative">
                                        <Swiper
                                            modules={[Navigation]}
                                            navigation={{
                                                prevEl: '.bestWedPrevSlide',
                                                nextEl: '.bestWedNextSlide',

                                            }}
                                            spaceBetween={32}
                                            slidesPerView={1}

                                            breakpoints={{
                                                991.98:{
                                                    slidesPerView: 2,
                                                },

                                                1399.98:{
                                                    slidesPerView: 3,
                                                }
                                            }}
                                        >
                                            {
                                                Product.map((product, index) => {
                                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product

                                                    return (
                                                        < SwiperSlide key={index} >
                                                            <ProductCard img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }

                                        </Swiper>
                                        <div className="sliderBtn">
                                            <PrevSlideBtn btnClassName="position-absolute start-0  z-index-5 top-186 bestWedPrevSlide" />
                                            <NextSlideBtn btnClassName="position-absolute end-0  z-index-5 top-186 bestWedNextSlide" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${"item2" === active ? 'showTab' : 'hideTab'}`}>
                                    <div className="position-relative">
                                    <Swiper
                                            modules={[Navigation]}
                                            navigation={{
                                                prevEl: '.bestWedPrevSlide',
                                                nextEl: '.bestWedNextSlide',

                                            }}
                                            spaceBetween={32}
                                            slidesPerView={1}

                                            breakpoints={{
                                                991.98:{
                                                    slidesPerView: 2,
                                                },

                                                1399.98:{
                                                    slidesPerView: 3,
                                                }
                                            }}
                                        >
                                            {
                                                Product.map((product, index) => {
                                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product

                                                    return (
                                                        < SwiperSlide key={index} >
                                                            <ProductCard img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }

                                        </Swiper>
                                        <div className="sliderBtn">
                                            <PrevSlideBtn btnClassName="position-absolute start-0  z-index-5 top-186 bestWedPrevSlide" />
                                            <NextSlideBtn btnClassName="position-absolute end-0  z-index-5 top-186 bestWedNextSlide" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${"item3" === active ? 'showTab' : 'hideTab'}`}>
                                    <div className="position-relative">
                                    <Swiper
                                            modules={[Navigation]}
                                            navigation={{
                                                prevEl: '.bestWedPrevSlide',
                                                nextEl: '.bestWedNextSlide',

                                            }}
                                            spaceBetween={32}
                                            slidesPerView={1}

                                            breakpoints={{
                                                991.98:{
                                                    slidesPerView: 2,
                                                },

                                                1399.98:{
                                                    slidesPerView: 3,
                                                }
                                            }}
                                        >
                                            {
                                                Product.map((product, index) => {
                                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product

                                                    return (
                                                        < SwiperSlide key={index} >
                                                            <ProductCard img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }

                                        </Swiper>
                                        <div className="sliderBtn">
                                            <PrevSlideBtn btnClassName="position-absolute start-0  z-index-5 top-186 bestWedPrevSlide" />
                                            <NextSlideBtn btnClassName="position-absolute end-0  z-index-5 top-186 bestWedNextSlide" />
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div >
        </>
    )
}

export default BestWeed
