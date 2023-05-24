import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import refferBg from '../../asserts/img/reffer/reffer-bg.jpg'

const RefferBlock = styled.div`
    background: url(${refferBg}) no-repeat;
    background-size : cover;
    background-position : center center;
    border-radius: 24px;
    padding:96px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: -166px;
    left: 0;
    right: 0;
    width: 100%;

    @media (max-width: 991.98px) {
        padding: 40px;
        flex-direction: column;
        align-items: start;
        row-gap: 40px;
    }

    @media (max-width: 575.98px) {
        padding: 24px 40px;
    }

`
const Button = styled.a`
display: inline-block;
    padding: 18px 56px;
    background: var(--primary-color);
    border-radius: 100px;
    color: var(--white-color);
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    &:hover{
        color: var(--white-color);
    }

`
function Reffer() {
    return (
        <>
            <div className="reffer">
                <Container>
                    <div className=" position-relative">
                        <RefferBlock>
                            <div className="content-section">
                                <h2 className="section-title text-white mb-32">REFER A FRIENDS</h2>
                                <h6 className="fs-32 text-white lh-150 ">And get<span className="fw-semi-bold text--accent ms-4">$30!</span></h6>
                            </div>
                            <Button href="#">Refer Here</Button>
                        </RefferBlock>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Reffer