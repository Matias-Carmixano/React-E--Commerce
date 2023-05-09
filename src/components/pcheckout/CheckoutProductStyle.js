import styled from "styled-components";

export const CheckoutProductSection = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 766px) {
        width: 100%;
        padding-top: 50px;
    }
`
export const TuPedido = styled.h3`
    width: 100%;
    font-weight: 600;
    text-align: left;
    padding-left: 18px;
`
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    min-height: 500px;
    max-height: 600px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    @media (max-width: 766px) {
        min-height: 500px;
                
    }
`

export const CountContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 18px;

`

export const Count = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 170px;
`

export const Reference = styled.p`
    font-size: 25px;
    color: var(--color-second);
    width: 75%;
    @media (max-width: 766px) {
        width: 50%;
        font-size: 1.3rem;
                
    }
`
export const Money = styled.p`
    font-size: 25px;
    color: var(--color-second);
    width: 50%;
    @media (max-width: 766px) {
        
        font-size: 1.3rem;
                
    }
`

export const Total = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: var(--color-thirst);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 766px) {
        font-size: 1.6rem;
        padding-right: 10px;
    }
`
export const Noproducts = styled.h2`
    color: var(--color-second);
    @media (max-width: 766px) {
        
        font-size: 1.3rem;
                
    }
`