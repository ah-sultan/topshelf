import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../../asserts/img/testimonial/logo.png'
import star from '../../asserts/img/testimonial/star.svg'
import TestimonialCard from './TestimonialCard'
import { testimonials } from './testimonialData'
import { NextSlideBtn, PrevSlideBtn } from '../sliderBtn/SliderBtn'




const CardTitle = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: -1.5px;
    padding-right: 30px;
    color: #fff;
    border-bottom: 1px solid #346654;
    padding-bottom: 32px;

    @media (max-width: 575.98px)  {
	font-size: 24px;
	line-height: 150%;
    letter-spacing: -0.5px;
	padding-right: 0;
}

`

const ReviewsText = styled.p`
    margin-left: 48px;
    color: #648A7C;


`

function Testimonial() {
    return (
        <>
            <div className="testimonial mt-136 mt-sm-64">
                <Container className='gx-0'>
                    <div className="header-section mb-64 mb-xs-32">
                        <h2 className="section-title">CUSTOMER TESTIMONIALS</h2>
                    </div>
                    <div className="card-section">
                        <Row>
                            <Col lg={5} xl={4}>
                                <div className="green-card rounded-4 bg--secondary p-40 p-xs-24">
                                    <CardTitle className="text--white">VOTED BEST ONLINE DISPENSARY IN CANADA</CardTitle>
                                    <img src={logo} alt="google" className="mt-32" />
                                    <h3 className="text--white mt-32 fs-18 lh-150 fs-xs-16">EXELLENCET</h3>
                                    <div className="reviews-section d-flex align-items-center mt-16">
                                        <div className="star-icon">
                                            <img src={star} alt="start icon" className="mr-4" />
                                            <img src={star} alt="start icon" className="mr-4" />
                                            <img src={star} alt="start icon" className="mr-4" />
                                            <img src={star} alt="start icon" className="mr-4" />
                                            <img src={star} alt="start icon" className="" />
                                        </div>
                                        <div>
                                            <ReviewsText className="fs-160 lh-150"><span className="text-white mr-6">on 135</span> Reviews</ReviewsText>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} xl={8}>
                                <div className="position-relative mt-md-32">
                                    <Swiper
                                        spaceBetween={32}
                                        slidesPerView={1}
                                        modules={[Navigation, Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false
                                        }}
                                        navigation={
                                            {
                                                nextEl: '.testimonilSlideNext',
                                                prevEl: '.testimonilSlidePrev',
                                            }
                                        }

                                        breakpoints = {{
                                            1200: {
                                                slidesPerView: 2
                                            }
                                        }} 
                                    >
                                        {
                                            testimonials.map((testimonial, index) => {

                                                const { id, img, name, rating, post, postDate } = testimonial

                                                return (
                                                    <SwiperSlide key={index}>
                                                        <TestimonialCard clientImg={img} clientAlt={name} name={name} postText={post} publishDate={postDate} rating={rating} />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                    <PrevSlideBtn btnClassName=" top-50 start-0 translate-middle-y z-3 testimonilSlidePrev" />
                                    <NextSlideBtn btnClassName=" top-50 end-0 translate-middle-y z-3 testimonilSlideNext" />
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div >
        </>
    )
}

export default Testimonial