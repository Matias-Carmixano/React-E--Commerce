
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Form = styled.form`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        background-color: #fafafa;
        padding: 0 0 80px 0;
`
export const Tittle = styled.h1`
        font-size: 40px;
        padding: 80px 0 40px 0 ;
`

export const InputContainer =styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        
`

export const RefInput =styled.h3`
        
`

export const InputIS = styled.input`
        width: 50%;
        height: 40px;
        border: none;
        border-bottom: 1px solid;
        font-size: 1.5rem;
        padding-left: 18px;
`
export const ContainerButtons = styled.div`
       width: 100%;
       display: flex;
       justify-content:center;
       align-items: center;
       gap: 20px;
`
export const GoogleImg = styled.img`

`
export const ButtonLog = styled.button`
       width: 200px ;
       height: 60px;
       background-color: var(--color-thirst);
       color: var(--color-letter);
       font-weight: 600;
       font-size: 24px;
       
`

export const ButtonGoogleLog = styled.button`
       width: 200px;
       height: 60px;
       background-color: var(--color-thirst);
       color: var(--color-letter);
       font-weight: 600;
       font-size: 24px;
`

export const Forgot = styled.p`
        font-size: 20px;
`
export const Text = styled.p`
        font-size: 20px;
`
export const Registrate = styled(NavLink)`
        padding-left: 5px;
        font-weight: 700;
`