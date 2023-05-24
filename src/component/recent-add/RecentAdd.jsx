import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../product-card/ProductCard';
import Product from '../Product';
import styled from 'styled-components'

const recentAddProduct = Product.slice(0, 4)

const FilterSection = styled.div`
    margin-top: 64px;
    padding-bottom: 32px;
    border-bottom: 1px solid #F4F4F4;
    column-gap: 40px;
`
const FilterButton = styled.div`
    display: flex;
    column-gap: 24px;
`
function RecentAdd() {

    const [active, setActive] = useState('recent-flowers')
    return (
        <>
            <div className="pb-120">
                <Container className="gx-0">
                    <h2 className="section-title">RECENTLY ADDED</h2>
                    <FilterSection className="sc-cRZddA kkctVj flex-column flex-xl-row d-flex align-items-xl-center   mb-32">
                        <div>
                            <p className="text--dark fs-24 lh-150 mb-lg-24 ">Filter by Interest</p>
                        </div>
                        <div className="flex-grow-1">
                        <FilterButton className="d-flex align-items-center flex-wrap gap-md-16">
                            <button type="button" onClick={() => setActive('recent-flowers')} className={`btn--outline ${active === 'recent-flowers' ? 'active' : undefined}`}>Flowers</button>
                            <button type="button" onClick={() => setActive('recent-mushrooms')} className={`btn--outline ${active === 'recent-mushrooms' ? 'active' : undefined}`}>Mushrooms</button>
                            <button type="button" onClick={() => setActive('recent-concentrate')} className={`btn--outline ${active === 'recent-concentrate' ? 'active' : undefined}`}>Concentrate</button>
                            <button type="button" onClick={() => setActive('recent-edibles')} className={`btn--outline ${active === 'recent-edibles' ? 'active' : undefined}`}>Edibles</button>
                            <button type="button" onClick={() => setActive('recent-shop-all')} className={`btn--outline ${active === 'recent-shop-all' ? 'active' : undefined}`}>Shop All Weed</button>
                            <a href="/" className="action--primary ms-auto">Show All</a>
                        </FilterButton>
                        </div>
                    </FilterSection>
                    <div className={active === 'recent-flowers' ? 'showTab' : 'hideTab'}>
                        <Row className="gx-32px">
                            {
                                recentAddProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col key={index} lg={3} xs={6}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'recent-mushrooms' ? 'showTab' : 'hideTab'}>
                        <Row>
                            {
                                recentAddProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col key={index} lg={3} xs={6}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'recent-concentrate' ? 'showTab' : 'hideTab'}>
                        <Row>
                            {
                                recentAddProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col key={index} lg={3} xs={6}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'recent-edibles' ? 'showTab' : 'hideTab'}>
                        <Row>
                            {
                                recentAddProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col key={index} lg={3} xs={6}>
                                            <div className="mt-32">
                                                <ProductCard id={id} img={img} cetagory={cetagory} title={title} rating={rating} reviews={reviews} label={label} price={price} discount={discount} unit={unit} stock={stock} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div className={active === 'recent-shop-all' ? 'showTab' : 'hideTab'}>
                        <Row>
                            {
                                recentAddProduct.map((product, index) => {
                                    const { id, img, cetagory, title, rating, reviews, label, price, discount, unit, stock } = product
                                    return (
                                        <Col key={index} lg={3} xs={6}>
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

export default RecentAdd
