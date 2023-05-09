import styled from "styled-components";
import { BsInstagram, BsFacebook, BsTiktok, BsMailbox, BsWhatsapp, BsFillPersonFill} from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'
import { FaTruck } from 'react-icons/fa'

export const FooterWrapper = styled.footer`
        width: 100%;
        height: 100%;
        background-color: var(--color-first);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 auto;
        @media (max-width: 766px) {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        }
        
`
export const ContainerLeft =styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        @media (max-width: 766px) {
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 18px;
                gap: 10px;
        }
        
`
export const ContainerRight = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items:center;
        justify-content: flex-start;
        padding-top: 18px;
        @media (max-width: 766px) {
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 0%;
        }

`
export const HomeCartLog = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 60%;
        justify-content: flex-start;
        
`
export const Informacion =styled.div`
        display: flex;
        height: 100%;
        width: 40%;
        flex-direction: column;
        justify-content: flex-start;
        @media (max-width: 766px) {
                width: 100%;
        }
`

export const ContRedes = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 50%;
        @media (max-width: 766px) {
                width: 100%;
        }
`
export const ContContact = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:flex-start;
        width: 50%;
        @media (max-width: 766px) {
                width: 100%;
        }
`

export const Tittles = styled.h3`
        color: var(--color-letter);
        @media (max-width: 766px) {
                font-size: 1.5rem;
    }
`

export const Text = styled.p`
        font-size: 20px;
        color: var(--color-letter);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        @media (max-width: 766px) {
                font-size: 1rem;
    }
`
export const IconCont = styled.div`
        display: flex;
        gap: 5px;
`

export const Instagram = styled(BsInstagram)`
        font-size: 28px;
        color: var(--color-letter);
`
export  const Facebook = styled(BsFacebook)`
        font-size: 28px;
        color: var(--color-letter);
`
export const TikTok = styled(BsTiktok)`
        font-size: 28px;
        color: var(--color-letter);
`
export const WhatsApp = styled(BsWhatsapp)`
        font-size: 28px;
        color: var(--color-letter);
`
export const Mail = styled(BsMailbox)`
        font-size: 28px;
        color: var(--color-letter);
`
export const Location = styled(HiOutlineLocationMarker)`
        font-size: 28px;
        color: var(--color-letter);
`

export const LogIn = styled(BsFillPersonFill)`
        font-size: 28px;
        color: var(--color-letter);
`
export const Home = styled(AiFillHome)`
        font-size: 28px;
        color: var(--color-letter);
`
export const Truck = styled(FaTruck)`
        font-size: 6rem;
        color: var(--color-letter);        
`
