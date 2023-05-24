import React, {useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../product-card/ProductCard';
import Product from '../Product';
import styled from 'styled-components'

const weedProduct = Product.slice(0, 8)


const FilterSection = styled.div`
    margin-top: 64px;
    padding-bottom: 32px;
    border-bottom: 1px solid #F4F4F4;
    column-gap: 40px;
`
function ChooseWeed() {
    const [active, setActive] = useState('flowers-choose')

    return (
        <>
            <div className="Choose mt-160 mt-sm-64 pb-286">
                <Container className="gx-xl-0">
                    <h2 className="section-title">CHOOSE YOUR WEED</h2>
                    <FilterSection className="d-flex align-items-xl-center mb-32 flex-column flex-xl-row mt-xs-24">
                        <p className="text--dark fs-24 lh-150 mb-lg-24">Filter by Interest</p>
                        <div className="d-flex column-gap-24 gap-md-16 flex-wrap">
                            <button type="button" className={`btn--outline ${active === 'flowers-choose' ? 'active' : undefined}`} onClick={() => setActive('flowers-choose')}>Flowers</button>
                            <button type="button" className={`btn--outline ${active === 'mashroom-choose' ? 'active' : undefined}`} onClick={() => setActive('mashroom-choose')}>Mushrooms</button>
                            <button type="button" className={`btn--outline ${active === 'concentrate-choose' ? 'active' : undefined}`} onClick={() => setActive('concentrate-choose')}>Concentrate</button>
                            <button type="button" className={`btn--outline ${active === 'edibles-choose' ? 'active' : undefined}`} onClick={() => setActive('edibles-choose')}>Edibles</button>
                            <button type="button" className={`btn--outline ${active === 'shopAllWeed' ? 'active' : undefined}`} onClick={() => setActive('shopAllWeed')}>Shop All Weed</button>
                        </div>
                    </FilterSection>
                    <div className={active === 'flowers-choose' ? 'showTab' : 'hideTab'}>
                        <Row className="gx-32px gx-xs-24px ">
                            {
                                weedProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col xs={6} lg={3} key={index}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'mashroom-choose' ? 'showTab' : 'hideTab'}>
                        <Row >
                            {
                                weedProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col xs={6} lg={3}  key={index}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'concentrate-choose' ? 'showTab' : 'hideTab'}>
                        <Row >
                            {
                                weedProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col xs={6} lg={3} key={index}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'edibles-choose' ? 'showTab' : 'hideTab'}>
                        <Row >
                            {
                                weedProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col xs={6} lg={3} key={index}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'shopAllWeed' ? 'showTab' : 'hideTab'}>
                        <Row >
                            {
                                weedProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col xs={6} lg={3} key={index}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ChooseWeed
