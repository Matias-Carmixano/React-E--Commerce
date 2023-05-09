import React from 'react'
import 
{ CardCartPrice, CardCartTitle, CardContainer, 
  CardImgContainer, DescriptionContainer, 
  ImageCardCart, ExitButton, ExitQuantityContainer, ButtonPlus, ButtonLess, ButtonQuantity,Quantity } from './ModalCartStyles'
import { useDispatch } from 'react-redux'
import { ButtonPlusF, ButtonLessF, RemoveProduct } from '../../redux/cart/CartSlice'



export const ModalCardCart = ({img, price, title, id, key, quantity}) => {

    const dispatch = useDispatch();

  return (
    <>
    <CardContainer id={id} key={key} >
        <CardImgContainer>
            <ImageCardCart
            src={img}
            alt={title}
            />
        </CardImgContainer>
        <DescriptionContainer>
            <CardCartTitle>{title}</CardCartTitle>
            <CardCartPrice>${price}</CardCartPrice>
            <ButtonQuantity>
        <ButtonPlus
        onClick={()=> dispatch(ButtonPlusF({id}))}
        >+</ButtonPlus>
        <Quantity>
          {quantity}
        </Quantity>
        <ButtonLess
        onClick={()=> dispatch(ButtonLessF({id}))}
        >-</ButtonLess>
        </ButtonQuantity>
        </DescriptionContainer>
        <ExitQuantityContainer>
        <ExitButton
        onClick={()=>dispatch(RemoveProduct({id}))}
        >X</ExitButton>
        </ExitQuantityContainer>
    </CardContainer>
    </>
  )
}
