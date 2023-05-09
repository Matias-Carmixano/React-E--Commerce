import styled from "styled-components";
import {FaRegTrashAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";

/*--------CARDMODAL----------*/
export const CartSection = styled.section`
    width: 30%;
    height: 100vh;
    visibility:${props => props.visibility ? 'visibility' : 'hidden'};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 99999;
    background-color: var(--color-first);
    position: fixed;
    top: 0;
    left: 70%;
    border-left: 1px solid white;
    @media (max-width: 766px) {
                width: 100%;
                height: 100vh;
                position: absolute;
                top: 99px;
                left: unset;
        
    }
`

export const ExitContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 0 50px 0;
    @media (max-width: 400px) {
        padding: 15px 0 15px 0;
        
    }
`

export const ExitButton = styled.button`
    color: var(--color-letter);
    background-color: var(--color-first);
    width: 3.5%;
    margin-left: 3.5%;
    font-size: 30px;
    border: none;
    @media (max-width: 400px) {
        font-size: 1rem;
        
    }

`

export const ProductContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
    overflow-y: scroll;
    scroll-behavior: smooth;
    border-left: 1px solid var(--color-first);
    gap: 5px;
    
`
export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 18px;
    border-bottom: 1px solid var(--color-letter);
`

export const CartTitle = styled.h3`
    width: 100%;
    color: var(--color-letter);
    font-size:3rem;
    @media (max-width: 766px) {
        font-size: 2.5rem;
        
    }
`
export const Delete = styled(FaRegTrashAlt)`
    color: var(--color-letter);
    background-color: red;
    width: 80px;
    height: 60px;
    margin-right: 5% ;
    padding: 1%;
    border-radius: 20px;
    cursor: pointer;
    @media (max-width: 766px) {
        width: 15%;
        height: 60%;
    }
`

export const CountContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: 1px solid var(--color-letter);
`

export const Count = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 766px) {
        font-size: 1.2rem;
        padding-right: 10px;
    }
`

export const Reference = styled.p`
    font-size: 25px;
    color: var(--color-letter);
    width: 75%;
            @media (max-width: 766px) {
        font-size: 1.2rem;
        width: 50%;
    }
`
export const Money = styled.p`
    font-size: 25px;
    color: var(--color-letter);
    width: 10%;
            @media (max-width: 766px) {
        font-size: 1.2rem;
    }
    
`

export const Total = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: var(--color-thirst);
            @media (max-width: 766px) {
        font-size: 1.2rem;
    }
`
export const Noproducts = styled.h3`
    font-size: 25px;
    color: var(--color-letter);
`
export const FinishContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;    
`

export const FinishiPurchaseLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;   
    text-decoration: none;
    color: var(--color-letter);
    :hover{
        color: var(--color-letter);
        text-decoration: none;
    }
    :focus{
        color: var(--color-letter);
        text-decoration: none;
    }
        
`
export const FinishButton = styled.button`
        width:50%;
        height: 50px;
        color: var(--color-letter);
        background-color: var(--color-thirst);
        font-size: 30px;
        font-weight: 600;
        margin: 2% 0 5% 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        @media (max-width: 766px) {
        font-size: 1.2rem;
        height: 35px;
    }
`

/*----------------- CSS CART CARD--------------------*/

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--color-first);
    border: 0.1px solid white;
    @media (max-width: 400px) {
        height: 100px;
        
    }

`
export const CardImgContainer =styled.div`
        width: 30%;
        height: 100%;
        background-color: white;
`
export const ImageCardCart = styled.img`
        object-fit: contain;
        width: 100%;
        height: 100%;
`

export const DescriptionContainer= styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    @media (max-width: 766px) {
        height:100%;
        gap: 0;
        
    }
`


export const CardCartTitle = styled.h2`
        font-size: 1.5rem;
        color: var(--color-letter);
        @media (max-width: 766px) {
        font-size: 1.5rem;
        
    }
    @media (max-width: 400px) {
        font-size: 1rem;
        
    }

`
export const CardCartPrice = styled.span`
        font-size: 2rem;
        color: var(--color-letter);
        @media (max-width: 766px) {
        font-size: 1.5rem;
        
    }
    @media (max-width: 400px) {
        font-size: 1rem;
        
    }

`


export const ExitQuantityContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: 80%;
    @media (max-width: 766px) {
        height: 100%;
        width: 12%;
    }


    @media (max-width: 400px) {
        height: 100%;
        
    }


`
export const ButtonQuantity =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 30%;

    
`
export const ButtonPlus =styled.button`
    width: 80%;
    color: var(--color-letter);
    background-color: var(--color-thirst);
    font-size: 1.5rem;
    font-weight: 600;
    border: none;
    @media (max-width: 766px) {
        font-size: 1rem;
    }

`
export const ButtonLess =styled.button`
    width: 80%;
    color: var(--color-letter);
    background-color: var(--color-thirst);
    font-size: 1.5rem;
    font-weight: 600;
    border: none;
    @media (max-width: 766px) {
        font-size: 1rem;
    }
`

export const Quantity = styled.div`
    color: var(--color-second);
    background-color: var(--color-letter);
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    @media (max-width: 766px) {
        font-size: 1.2rem;
    }
    @media (max-width: 400px) {
        font-size: 1rem;
        
    }

`
