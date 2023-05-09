import styled from "styled-components";

export const InputStyled= styled.input`
    width: 70%;
    height: 50px;
    font-size: 20px;
    @media (max-width: 766px) {
        width: 90%;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const LabelStyled= styled.label`
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    @media (max-width: 766px) {
        width: 100%;
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
    }
`

export const InputContainer =styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 766px) {
        width: 100%;
        font-size: 1.6rem;
        align-items: center;
        justify-content: flex-start;
        padding-left: 5px;
    }
`

export const ErrorMessageStyled = styled.p`
    font-size: 18px;
    color: red;
    font-weight: 700;
    width: 100%;
    @media (max-width: 766px) {
        width: 100%;
        font-size: 1rem;
        display: flex;
        justify-content: center;
    }
`
