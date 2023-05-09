import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = styled.header`
    width: 100%;
    height: 150px;
    background-color: var(--color-first);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 766px) {
         height: 100px;
    }
`
export const LogoCont = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 766px) {
                width: 40%;
    }
   
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
`

export const Search =styled.input`
    width: 25%;
    height: 30px;

    :hover{
        outline: none;
        
    }
  
    :active{
        border: none;
    }
    @media (max-width: 766px) {
            display: none;
        }
`
export const BurgerMenu = styled(GiHamburgerMenu)`
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--color-letter);
    cursor: pointer;
    @media (min-width: 766px) {
        display: none;
    }
`

export const Nav = styled.nav`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    @media (max-width: 766px) {
                position: absolute;
                width: 100%;
                height: 50%;
                top: 99px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 20px;
                gap: 50px;
                z-index: 9999999999999;
                background-color: var(--color-first);
                opacity: 0.93 ;
                visibility:${props => props.visibility ? 'visibility' : 'hidden'};
        }
`

export const Link = styled(NavLink)`
    color: var(--color-letter);
    :hover{
        color: var(--color-letter);

    }

`

export const Home = styled(AiFillHome)`
    font-weight: 900;
    font-size: 2rem;
    color: var(--color-letter);
    cursor: pointer;
`

export const Cart = styled(BsCartFill)`
    font-weight: 900;
    font-size: 2rem;
    color: var(--color-letter);
    cursor: pointer;
`

export const LogIn = styled(BsFillPersonFill)`
    font-weight: 900;
    font-size: 2rem;
    color: var(--color-letter);
    cursor: pointer;
`