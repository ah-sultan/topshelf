import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import img1 from '../../asserts/img/education/img-1.png'
import img2 from '../../asserts/img/education/img-2.png'
import img3 from '../../asserts/img/education/img-3.png'

const HeaderSection = styled.div`
    border-bottom: 1px solid #C8C9CB;
`

function Education() {
    return (
        <>
            <div className="education bg--light pb-320 pt-120 pb-xs-270">
                <Container className="gx-0">
                    <HeaderSection className='d-flex align-items-center justify-content-between pb-32'>
                        <h2 className="section-title fs-xs-24">WEED EDUCATION</h2>
                        <a className="action--primary fs-xs-14" href="#">Show All</a>
                    </HeaderSection>
                    <div className="card-section">
                        <Row className="gx-32px">
                            <Col md={8} lg={4}>
                                <EducationCard cardImg={img1} postDate="January 24, 2023" cardTitle="12 Mistakes To Avoid When Buying Cannabis Online" cardText="Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …" />
                            </Col>
                            <Col md={8} lg={4}>
                                <EducationCard cardImg={img2} postDate="January 24, 2023" cardTitle="How To Store Cannabis and Keep it Fresh and Potent?" cardText="Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ..." />
                            </Col>
                            <Col md={8} lg={4}>
                                <EducationCard cardImg={img3} postDate="January 24, 2023" cardTitle="The Ultimate Guide to Checking the Quality of Cannabis – 10 Industry Leading Tips" cardText="Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Education


function EducationCard(props) {
    return (
        <>
            <div className="mt-64 mt-xs-32">
                <img src={props.cardImg} alt="Card Img" className="w-100" />
                <div className="mt-24">
                    <p className="fs-14 lh-150 fw-light text--natural">{props.postDate}</p>
                    <h4 className="card-title text--dark mt-8 mb-8">{props.cardTitle}</h4>
                    <p className="card-description mb-32">{props.cardText}</p>
                    <a href={props.action} className="action--primary">Read More</a>
                </div>
            </div>
        </>
    )
}