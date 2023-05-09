import styled from 'styled-components';


export const RecoCard = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        scroll-snap-align: center;

`

export const ImgCont = styled.div`
        width: 40%;
        height: 100%;
        display: flex;
`

export const ImgReco = styled.img`
        object-fit: cover;
        width: 100%;
        height: 100%;

        
`
export const DescCont = styled.div`
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;     
        @media (max-width: 766px) {
                font-size: 1rem;
        }   
`
export const Tittle = styled.h3`
        color: var(--color-second);
        font-size: 2.5em;
        @media (min-width: 767px) and (max-width:1023px) {
                font-size:2.2rem ;
        }
        @media (max-width: 766px) {
                font-size: 1rem;
        }
`
export const PriceReco = styled.p`
        font-size: 2em;
        font-weight: 600;
        color: var(--color-second);
        @media (max-width: 766px) {
                font-size: 1.2rem;
        }
`

export const ButtonRecommended = styled.button`
        width: 30%;
        height: 50px;
        background-color: var(--color-thirst);
        color: var(--color-letter);
        font-size: 1.8em;
        font-weight: 600;
        @media (max-width: 766px) {
                font-size: 0.8rem;
                height: 20%;
        }
`