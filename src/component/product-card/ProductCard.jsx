import React from 'react'
import styled from 'styled-components'
import Product from '../Product'
import productBg from '../../asserts/img/product-card/product-bg.png'
import starIcon from '../../asserts/img/product-card/star.svg'

const CardImg = styled.div`
    position : relative;
    background: url(${productBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    height: 240px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`

const OutStock = styled.button`
    min-width: 152px;
    padding: 21px 32px ;
    position: absolute;
    background: rgba(5, 66, 44, 0.3);
    backdrop-filter: blur(4px);
    border-radius: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: var(--white-color);
    display: none;
`

const ProductCtg = styled.p`
    color: #9D9EA2;
`
const ProductTitle = styled.h4`
    max-width: 291px;

    @media (max-width: 991.98px) {
        max-width: 100%;
    }
`

const Rating = styled.span`
    color: #060709;
    margin : 0 24px 0 6px;
    position: relative;

    &::after{
        content: '';
        width: 2px;
        height: 12px;
        background: #C8C9CB;
        position: absolute;
        right: -12px;
        top: 4px;
    }

    @media (max-width: 575.98px){
        margin : 0 16px 0 6px;

        &::after{
        right: -8px;
    }
    }

`

const ReviewsText = styled.span`
    color: #C8C9CB;

`

const Label = styled.span`
    padding: 5px 10px;
    background: #F2F6F4;
    font-size: 12px;
    line-height: 150%;
    border-radius: 4px;
`

const UnitBox = styled.div`
    padding: 6px 10px;
    margin: 0 4px;
    background: var(--white-color);
    border: 1px solid var(--light-color);
    border-radius: 4px;
`


function ProductCard(props) {

    return (
        <>
            <div className="product-card text-center h-100">
                <CardImg>
                    <img src={props.img} alt="product Title" />
                    <OutStock className={`${props.stock === 0 ? 'd-block' : 'd-none'}`}>Out Of Stock</OutStock>
                </CardImg>
                <div className="card-body">
                    <ProductCtg className="fs-14 lh-150 fw-light fs-xs-12">{props.cetagory}</ProductCtg>
                    <ProductTitle className="mb-8 mt-8 mx-auto text--dark fs-18 fs-xs-16 fw-normal lh-150 text-center">{props.title}</ProductTitle>
                </div>
                <div>
                    <div className="fs-14 fs-xs-12 lh-150 fw-normal text-center mb-8 d-flex align-items-center justify-content-center">
                        <img src={starIcon} alt="starIcon" />
                        <Rating>{props.rating}/ 5</Rating>
                        <ReviewsText> <span className="mr-6 mr-xs-4 text--dark fs-14 lh-150 fw-normal">{props.reviews}</span> Reviews</ReviewsText>
                    </div>
                </div>
                <Label className="Product-details text--secondary fw-normal mt-8">Sativa 100%</Label>
                <div className="d-flex align-items-center justify-content-center mt-20">
                    <span className="lh-24px fs-14 text--light-grey mr-16">$200</span>
                    <span className="lh-24px fs-14 text--red ">$80.00</span>
                </div>
                <div className="unit-block mt-20 d-flex justify-content-center align-items-center">
                    {
                        props.unit.map((units, index) => {
                            return <UnitBox key={index}>
                                <span className="fs-12 lh-150 fw-normal">{units}</span>
                            </UnitBox>
                        })
                    }
                </div>
                <button className="btn--primary fw-bold mt-20">Add To Card</button>
            </div>
        </>
    )
}

export default ProductCard