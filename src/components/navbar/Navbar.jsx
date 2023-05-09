import React from 'react';
import { Header, Nav, Link, Logo, LogoCont, Cart, Home, LogIn, BurgerMenu } from './NavbarStyles';
import LogoImg from '../../utils/Logo2.png'
import { ModalCart } from "../cart/ModalCart";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleCart, ToggleBurger } from '../../redux/cart/CartSlice';
import '../../styles/Styles.css'


export const Navbar = () => {

  const BurgerHidden = useSelector(state=> state.cart.BurgerHidden)
  
  const dispatch = useDispatch()

 
  return (
    <Header>
        <LogoCont>
          <Logo src={LogoImg} />
        </LogoCont>
        
        <Nav visibility={BurgerHidden}>
            <Link to='/'><Home/></Link>
            <Cart 
            onClick={() =>dispatch(ToggleCart(true))}/>
            <Link to='login'><LogIn/></Link>
        </Nav>
        <ModalCart/>
        <BurgerMenu onClick={() =>dispatch(ToggleBurger(true))}/>
    </Header>
  )
}
