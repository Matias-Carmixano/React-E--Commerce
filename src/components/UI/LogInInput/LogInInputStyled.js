import styled from "styled-components";

export const InputContainerStyled =styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
`

export const LogInInputStyled = styled.input`
        width: 50%;
        height: 40px;
        border: none;
        border-bottom: 1px solid;
        font-size: 1.5rem;
        padding-left: 18px;
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