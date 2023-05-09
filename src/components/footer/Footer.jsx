import React from 'react'
import { ContainerLeft, ContainerRight, ContContact, ContRedes, FooterWrapper, Text, Tittles, HomeCartLog, Informacion, Instagram, IconCont, Facebook, TikTok, WhatsApp, Mail, Location, Home, LogIn, Truck } from './FooterStyles'
import {Link} from '../navbar/NavbarStyles'
export const Footer = () => {
  return (
    <FooterWrapper>
      <ContainerLeft>
        <HomeCartLog>
          <Tittles>Navegacion</Tittles>
          <IconCont><Home/><Link to='/'><Text>Home</Text></Link></IconCont>
          <IconCont><LogIn/><Link to='login'><Text>Log in</Text></Link></IconCont>
        </HomeCartLog>
        <Informacion>
          <Tittles>Envios a todo el país</Tittles>
          <Truck/>
        </Informacion>
      </ContainerLeft>
      <ContainerRight>
        <ContRedes>
          <Tittles>Redes</Tittles>
          <IconCont>
          <Instagram/><Text>Instagram</Text>
          </IconCont>
          <IconCont>
            <Facebook/><Text>Facebook</Text>
          </IconCont>
          <IconCont>
          <TikTok/><Text>Tik Tok</Text>
          </IconCont>
          </ContRedes>
          <ContContact>
          <Tittles>Conctacto</Tittles>
            <IconCont><Mail/><Text>Popstore@gmail.com</Text></IconCont>
            <IconCont><WhatsApp/><Text>+5491133094851</Text></IconCont>
            <IconCont><Location/><Text>La Paternal, Caba</Text></IconCont>
            
          </ContContact>
      </ContainerRight>
    </FooterWrapper>
  )
}
