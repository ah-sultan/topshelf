import React, { useEffect, useState } from 'react'
import { memo } from 'react'
import styled from 'styled-components'

import star from '../../asserts/img/testimonial/star.svg'
import starDark from '../../asserts/img/testimonial/star-dark.svg'


const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    border-radius: 16px;
    height: 424px; 
    display: flex;
    flex-direction: column;
`
const CardText = styled.div`
    border-top: 1px solid #C8C9CB;
    padding-top : 32px;
`

const RatingIcons = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
`
const ReviewDate = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #9D9EA2;
`

function TestimonialCard(props) {
    const [icon, setIcon] = useState([])

    useEffect(() => {

        switch (props.rating) {
            case 1:
                setIcon([star, starDark, starDark, starDark, starDark]);
                break
            case 2:
                setIcon([star, star, starDark, starDark, starDark])
                break
            case 3:
                setIcon([star, star, star, starDark, starDark])
                break
            case 4:
                setIcon([star, star, star, star, starDark])
                break
            case 5:
                setIcon([star, star, star, star, star])
                break
            default:
                setIcon([starDark, starDark, starDark, starDark, starDark])
        }
    }, [icon])

    return (
        <>
            <Card className="p-40 rounded-3 bg--White">
                <div className=" d-flex align-items-center mb-32">
                    <img src={props.clientImg} alt={props.clientAlt} className="mr-16" />
                    <h6 className="fs-16 lh-150">{props.name}</h6>
                </div>
                <CardText>
                    <RatingIcons>
                        {
                            icon.map((icons, index) => {
                                return <img src={icons} key={index} alt="star" />
                            })
                        }
                    </RatingIcons>
                    <p className="text--dark fs-16 lh-150">{props.postText}</p>
                </CardText>
                <div className="align-self-end mt-auto w-100">
                <ReviewDate>{props.publishDate}</ReviewDate>
                </div>
            </Card>
        </>
    )
}

export default memo(TestimonialCard)