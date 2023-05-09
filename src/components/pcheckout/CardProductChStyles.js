import styled from "styled-components"

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-letter);
`
export const CardImgContainer =styled.div`
        width: 270px;
        height: 270px;
        @media (max-width: 766px) {
        width: 150px;
        height: 150px;
                
    }
`
export const ImageCardCart = styled.img`
        object-fit: contain;
        width: 100%;
        height: 100%;
`

export const DescriptionContainer= styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    @media (max-width: 766px) {
        gap: 10px;
                
    }
    
`


export const CardCartTitle = styled.h2`
        font-size: 200%;
        color: var(--color-second);
        @media (max-width: 766px) {
        font-size: 100%;
        font-weight: 600 ;
    }
`
export const CardCartPrice = styled.span`
        font-size: 40px;
        color: var(--color-second);
        @media (max-width: 766px) {
        font-size: 1.5rem;
        font-weight: 600;
                
    }
`


export const ExitQuantityContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25%;
    height: 100%;
    @media (max-width: 766px) {
        display: none;
                
    }

`
export const ButtonQuantity =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    @media (max-width: 766px) {
        width: 40%;
                
    }
    
`
export const ButtonPlus =styled.button`
    width: 100%;
    color: var(--color-letter);
    background-color: var(--color-thirst);
    font-size: 23px;
    font-weight: 900;
    border: none;
    @media (max-width: 766px) {
        font-size: 1rem;
                
    }
`
export const ButtonLess =styled.button`
    width: 100%;
    color: var(--color-letter);
    background-color: var(--color-thirst);
    font-size: 23px;
    border: none;
    font-weight: 900;
    @media (max-width: 766px) {
        font-size: 1rem;
                
    }
`

export const Quantity = styled.div`
    color: var(--color-second);
    background-color: var(--color-letter);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    @media (max-width: 766px) {
        font-size: 1rem;
                
    }
`
export const ExitButton = styled.button`
    color: var(--color-second);
    background-color: var(--color-letter);
    width: 3.5%;
    margin-left: 3.5%;
    font-size: 30px;
    border: none;
    @media (max-width: 766px) {
        font-size: 1.3rem;
    }
`

