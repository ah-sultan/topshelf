import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const CtaSection = styled.div`
    background: var(--secondary-color);
    padding: 64px;
    position: absolute;
    width: 1200px;
    border-radius: 24px;
    top: -208px;
    left: 50%;
    transform: translateX(-50%);
     @media (max-width: 1199.98px) {
        width: 100%;
     }

     @media (max-width: 575.98px) {
        padding: 24px;
     }
`
const Title = styled.h2`
      max-width: 616px;
`
const FormSection = styled.div`
    border-top: 1px solid #346654;
    padding-top:32px;
`
const Input = styled.input`
    padding: 24px 44px;
    width: 835px;
    background: var(--secondary-color);
    border: 1px solid #346654;
    border-radius: 100px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #648A7C;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #648A7C;
    }

    &:focus{
        outline: 1px solid #346654;
    }

    @media (max-width: 1199.98px) {
        width: 628px;
    }

    @media (max-width: 991.98px) {
        padding: 20px 32px;
        width: 68%;
        margin-right: 16px;
    }

    @media (max-width: 767.98px) {
        width: 100%;
        margin-right : 0;
        margin-bottom: 16px
    }
`

const Button = styled.button`
    padding: 24px 44px;
    &:hover{
        padding: 24px 44px;
    }

    @media (max-width: 991.98px) {
        padding: 20px 32px;
        margin: 0 !important;

        &:hover{
            padding: 20px 32px;
        }
    }

    @media (max-width: 767.98px) {
        width: 100%;
    }

`

function Cta() {
  return (
   <>
    <div className="position-relative">
        <Container>
            <CtaSection>
                <Title className="section-title text--white max-w-789">UNLOCK 20% OFF YOUR FIRST ORDER</Title>
                <p className="text-white fs-20 lh-150 mt-24 mb-32">Reveal coupon code by entering your email</p>
                <FormSection>
                    <Input placeholder="Email Address" type="email"/>
                    <Button type='submit' className="btn--primary fs-16 lh-150 ml-32 ">Reveal coupon</Button>
                </FormSection>
            </CtaSection>
        </Container>
    </div>
   </>
  )
}

export default Cta