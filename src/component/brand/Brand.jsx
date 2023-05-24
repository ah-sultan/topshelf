import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'

import indica from '../../asserts/img/brand/indica.png'
import savita from '../../asserts/img/brand/savita.png'
import hybrids from '../../asserts/img/brand/hybrids.png'

const BrandSection = styled.div`
    border-top: 1px solid var(--natural-color);
    padding-top: 64px;
`

function Brand() {
  return (
    <>
    <div className="brand pb-120 pb-xs-64">
        <Container className="gx-0">
            <BrandSection>
            <Row className="gx-32px">
                <Col xl={4} lg={6} className="mb-lg-24">
                    <BrandCard brandLogo={indica} cardTitle="Indica" cardText="This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues." action="#" actionText="Shop Indica"/>
                </Col>
                <Col xl={4} lg={6} className="mb-lg-24">
                    <BrandCard brandLogo={savita} cardTitle="Sativa" cardText="Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day." action="#" actionText="Shop Sativa"/>
                </Col>
                <Col xl={4} lg={6}>
                    <BrandCard brandLogo={hybrids} cardTitle="Hybrids" cardText="Hybrid strains are just that – they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced (the best of both worlds)." action="#" actionText="Shop Hybrids"/>
                </Col>
            </Row>
            </BrandSection>
        </Container>
    </div>
    </>
  )
}

export default Brand

const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    border-radius: 12px;
    padding:32px;
`
const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 240px;
    background: #F2F6F4;
    border-radius: 8px;
`


function BrandCard(props) {
    return(
        <>
        <Card>
            <CardHeader>
                <img src={props.brandLogo} alt="Brand Logo" />
            </CardHeader>
            <h4 className="card-title text--dark mt-32 mb-16">{props.cardTitle}</h4>
            <p className="card-description text--natural mb-32">{props.cardText}</p>
            <a className="action--primary" href={props.action}>{props.actionText}</a>
        </Card>
        </>
    )
}