import React from 'react'
import { CartSection, CartTitle, Count, CountContainer, Delete, ExitButton, ExitContainer, FinishButton, FinishContainer, FinishiPurchaseLink, Money, Noproducts, ProductContainer, Reference, TitleContainer, Total } from './ModalCartStyles'
import { useDispatch, useSelector } from 'react-redux';
import { ModalCardCart } from './ModalCardCart';
import {  ClearCart, ToggleCart } from '../../redux/cart/CartSlice'


export const ModalCart = () => {

    const CartProduct = useSelector(state => state.cart.cartItems);
    const ShippingCost = useSelector(state => state.cart.shippingCost);
    const Toggle = useSelector(state => state.cart.CartHidden);

    const dispatch = useDispatch();

    const SubTotal = CartProduct.reduce((acc,item)=>{
        return (acc += item.price * item.quantity);
    }, 0);


  return (
    <>
    <CartSection visibility={Toggle}>
        <ExitContainer>
            <ExitButton v
            onClick={()=> dispatch(ToggleCart(true))}
            >X</ExitButton>
        </ExitContainer>
        <TitleContainer>
                <CartTitle>Tus Productos</CartTitle>
                <Delete onClick={()=> dispatch(ClearCart(true))}/>
        </TitleContainer>
        <ProductContainer>
            {
            CartProduct.length ? (
            CartProduct.map(function(CartProduct){
                return <ModalCardCart key={CartProduct.key}{...CartProduct}/> 
            })
            ) : (
                <Noproducts>No compraste nada</Noproducts>
            )
            }

        </ProductContainer>
        <CountContainer>
                <Count><Reference>Subtotal:</Reference><Money>${SubTotal}</Money></Count>
                <Count><Reference>Envio:</Reference><Money>${ShippingCost}</Money></Count>
                <Count><Reference><Total>Total:</Total></Reference><Money><Total>${SubTotal + ShippingCost}</Total></Money></Count>
        </CountContainer>
        <FinishiPurchaseLink to='checkout' >
        <FinishContainer>
            <FinishButton disabled ={!CartProduct.length}>
                Finalizar Compra
            </FinishButton>
        </FinishContainer>
        </FinishiPurchaseLink>
    </CartSection>
    
    </>
  )
}
