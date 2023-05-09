import styled from "styled-components";





export const CheckoutSectionForm =styled.section`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 50px;
    @media (max-width: 766px) {
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        padding-left: 0px;
    
    }
`

export const Title =styled.h2`
    width: 100% ;
    color: var(--color-second);
    font-weight: 700;
    padding-bottom: 50px;
    text-align: left;
    @media (max-width: 766px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const FormCheck = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 50px;
    @media (max-width: 766px) {
        width: 100%;
        align-items: center;
    }
`
export const ContainerInputs =styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    @media (max-width: 766px) {
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        margin: 0;
    }

`

export const Input= styled.input`
    width: 70%;
    height: 50px;
    font-size: 20px;
    @media (max-width: 766px) {
        width: 100%;
        
    }
`


export const ContainerLocationAddress =styled.div`
    width: 100%;
    height: 50%;
    display: flex;

`



export const InputTitleContainer =styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
`
export const Label= styled.label`
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    @media (max-width: 766px) {
        width: 100%;
        
    }
    
`
export const IniciarCompra = styled.button`
    width: 30%;
    height: 40px;
    font-size: 150%;
    background-color: var(--color-thirst);
    color: var(--color-letter);
    cursor:pointer;
    @media (max-width: 766px) {
        width: 80%;

    }
`