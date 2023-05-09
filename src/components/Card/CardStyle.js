import styled from "styled-components";




export const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 28%;
        @media (max-width:1023px) {
                width:100%
        }
       
                
`
export const CardContImg = styled.div`
        width: 66.04%;
        height: 66.04%;

`

export const CardImage = styled.img`
        object-fit: contain;
        width: 100%;
        height: 100%;
`
export const CardDescription = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export const CardTittle = styled.h2`
        font-size: 2rem;
        font-weight: 600;
        @media (max-width: 767px) {
                font-size: 1.5rem;
        }
`
export const CardPrice = styled.span`
        font-size: 2rem;
        color: black;
        font-weight: 600;
        @media (max-width: 767px) {
                font-size: 1.5rem;
        }
`

export const ButtonBuy =styled.button`
        width: 100%;
        color: var(--color-letter);
        background-color: var(--color-thirst);
        font-size: 2rem;
        font-weight: 600;
        @media (max-width: 767px) {
                font-size: 1.5rem;
        }
        
`

export const MarketContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 50px 0 50px 0;
        gap: 30px;
`

export const ButtonContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        padding: 0 0 20px 0;
`

export const ButtonSeeMore = styled.button`
        width: 200px;
        height: 50px;
        background-color: var(--color-thirst);
        color: var(--color-letter);
        border-radius: 18px;
        font-size: 20px;
        font-weight: 600;
`

export const ButtonSeeLess = styled.button`
        width: 200px;
        height: 50px;
        background-color: var(--color-first);
        color: var(--color-letter);
        border-radius: 18px;
        font-size: 20px;
        font-weight: 600;
`
