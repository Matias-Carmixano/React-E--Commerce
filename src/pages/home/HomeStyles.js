import styled from "styled-components";

export const HomeContainer = styled.section`
        width: 100%;
        height: 100%;
        background-color: white;

        
`

export const RecommendedWrapper = styled.div`
            width: 100%;
            height: 200px;
            display:flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            scroll-snap-type: y mandatory;
            overflow-y:scroll;
            & div:nth-of-type(1n+5){
                display: none;
            }
            @media (max-width: 766px) {
                height: 160spx;
        }
`

export const Title = styled.h3`
        color: var(--color-second) ;
        font-size: 3rem;
        @media (min-width: 767px) and (max-width:1023px) {
                font-size: 2rem;
          
        }
        @media (max-width: 766px) {
                font-size: 1.5rem;
        }
`

export const CategoriesWrapper = styled.div`
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px;
        gap:20px;

        @media (min-width: 767px) and (max-width:1023px) {
                width: 100%;
                height: 100%;
                gap: 10px;
                flex-wrap: wrap;
                justify-content: flex-start;
          
        }
        @media (max-width: 766px) {
                flex-wrap: wrap;
                justify-content: flex-start;
          
                
        }
`

export const ProductContainer = styled.section`
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px;
        gap:20px;

        @media (min-width: 767px) and (max-width:1023px) {
                width: 100%;
                height: 100%;
                gap: 10px;
                flex-wrap: wrap;          
        }
`
