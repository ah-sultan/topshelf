import React, {useEffect, useRef, useState} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import logo from '../../asserts/img/header/logo.png'
import searchIcon from '../../asserts/img/header/search-normal.svg'
import bagIcon from '../../asserts/img/header/bag-icon.svg'
import arrowDown from '../../asserts/img/header/arrow-down.svg'


const Navbar = styled.div`
    padding: 18px 0;
    border-bottom: 1px solid var( --light-color);

    @media (max-width: 991.98px) {
        padding: 0;
    }

`

const SearchForm = styled.input`
    
        width: 456px;
        padding: 4px 4px 4px 24px;
        width: 400px;
        height: 48px;
        background: var(--white-color);
        border: 1px solid var( --light-color);
        border-radius: 100px;
        margin-right: 8px;

        &:focus{
            outline : 0;
        }

        @media (max-width: 575.98px) {
            padding: 7.5px 20px;
            width: 298px;
            font-size: 14px;
            height: 36px;
        }
`

const Button = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease-in;
    
    &:hover{
        background: var(--primary-color) !important;
    }

    @media (max-width: 575.98px) {
            height: 36px;
            width: 36px;
        }
`

const UserAccount = styled.a`
    font-size : 14px;
    font-weight: 400;
    color : var(--gray-color);
    margin-right: 48px;
    position: relative;


    &:hover{
        color : var(--black-color);
    }

    &::after{
        content: '';
        position: absolute;
        display: block;
        width: 2px;
        height: 12px;
        top: 4px;
        right: -24px;
        background: #C8C9CB;

    }

    @media (max-width: 767.98px) {
        margin-right: 32px
    }

    &::after{
        right: -16px;
    }
`

const BagButton = styled.button`
    background: transparent;
    position: relative;
`

const CartCount = styled.span`
    position: absolute;
    background: var(--red-color);
    color: var(--white-color);
    padding: 1px 4.5px;
    border-radius: 50%;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    bottom: -1px;
    right: -6px;

`

const NavMenuWrapper = styled.div`
    @media (max-width: 1199.98px){
        position : fixed;
        width: 80%;
        height: 100vh;
        z-index: 90;
        left: 0;
        top: 0;
        bottom: 0;
        box-shadow : 0px 0px 5px rgba(0, 0, 0, 0.4);
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        transition: all .3s ease-in-out;
        
    }
`

const NavbarNav = styled.ul`
    gap: 40px;

    @media (max-width: 1199.98px){

    }
`
const Navlink = styled.a`
    text-decoration: none;
    color: var(--gray-color);
    padding: 16px 0;
    display: inline-block;
    font-size: 16px;

    &:hover{
        color: var(--primary-color);
    }

    @media (max-width: 1199.98px){
        padding: 11px 0;
    }
`
function Header() {
    const [isTrue, setIstrue] = useState(false)
        console.log(isTrue)
    const itemCount =6;
    return (
        <>
            <div className="header bg--white">
                <Navbar>
                    <Container>
                        <div className="d-flex justify-content-between align-items-center flex-wrap flex-lg-no-wrap">
                            <div className="pt-md-14 pb-md-14">
                                <button className='d-inline-block d-xl-none bg-transparent mr-12' onClick={() => setIstrue(true)}>    
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 7H21" stroke="#062A09" strokeWidth="1.5" stroke-linecap="round"/>
                                        <path d="M3 12H21" stroke="#062A09" strokeWidth="1.5" stroke-linecap="round"/>
                                        <path d="M3 17H21" stroke="#062A09" strokeWidth="1.5" stroke-linecap="round"/>
                                    </svg>
                                </button>
                                <a href="#" className="brand-logo">
                                    <img src={logo} alt="logo" className="h-xs-28"/>
                                </a>
                            </div>
                            <div className="search-form order-3 order-lg-2 pb-md-12 pt-md-12 text-center bt-md-light text-center">
                                <form action="#" className="d-flex ailgn-items-center justify-content-center">
                                    <SearchForm type="text" placeholder='Search' />
                                    <Button type='button' className=" bg--secondary justify-content-center align-items-center d-inline-flex">
                                        <img src={searchIcon} alt="Search Icon" />
                                    </Button>
                                </form>
                            </div> 
                            <div className="user-block order-lg-3 pt-md-14 pb-md-14">
                                <UserAccount href="#">Your Account</UserAccount>
                                <BagButton>
                                    <img src={bagIcon} alt="Bag-icon" />
                                    <CartCount>{itemCount}</CartCount>
                                </BagButton>
                            </div>
                        </div>
                    </Container>
                </Navbar>
                <NavMenuWrapper  className={`bg--white d-xl-block ${isTrue ? 'showNav': undefined}`}>
                    <div className="text-end p-40 d-block d-xl-none">
                        <button className=" bg-transparent" onClick={() => setIstrue(false)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.24756" y="0.786133" width="24" height="3" transform="rotate(45.1597 2.24756 0.786133)" fill="#05422C"/>
                                <rect x="0.786133" y="17.7529" width="24" height="3" transform="rotate(-44.8403 0.786133 17.7529)" fill="#05422C"/>
                            </svg>
                        </button>
                    </div>
                    <NavbarNav className='d-xl-flex justify-content-center align-items-center'>
                        <li>
                            <Navlink href="#">Shop All <img src={arrowDown} alt="arrow-down" /></Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Flower</Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Edibles</Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Concentrates <img src={arrowDown} alt="arrow-down" /></Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Mushrooms</Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Promotions/Bundles <img src={arrowDown} alt="arrow-down" /></Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Support <img src={arrowDown} alt="arrow-down" /></Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Rewards</Navlink>
                        </li>
                        <li>
                            <Navlink href="#">Blog</Navlink>
                        </li>

                    </NavbarNav>
                </NavMenuWrapper>
            </div>
        </>
    )
}

export default Header