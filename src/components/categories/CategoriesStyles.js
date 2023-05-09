import styled from "styled-components"

export const CategoriesConta =styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${({ selected }) =>
        selected ? 'var(--color-extra)' : 'var(--color-first)'};
        border-radius: 20px;      
        cursor: pointer;
        @media (min-width: 767px) and (max-width:1023px) {
                width: 25%;
                height: 100%;
        }
        @media (max-width: 766px) {
                width:45%;

        }

`

export const ContImgCat = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
`

export const ImgCat = styled.img`
        object-fit: contain;
        width: 66.17%;
        height: 150px;
        @media (max-width: 766px) {
                height: 150px;
        }

`
export const TextCat = styled.h3`
        color: var(--color-letter);
        text-align: center;  
        font-size: 2rem;
        @media (min-width: 767px) and (max-width:1023px) {
                font-size: 1.5rem;
          
        }
        @media (max-width: 766px) {
                font-size: 1rem;
        }
`