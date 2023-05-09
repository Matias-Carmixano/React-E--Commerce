import React from 'react'
import { CardContainer, CardDescription, CardImage, CardPrice, CardTittle, ButtonBuy, CardContImg } from './CardStyle'
import { useDispatch } from 'react-redux'
import { AddCardProduct } from '../../redux/cart/CartSlice'

export const CardProduct = ({img, title, price, key, id}) => {

  const dispatch = useDispatch()

  return (
    <>
    <CardContainer id={id} key={key}>
    <CardContImg>
    <CardImage src={img}/>
    </CardContImg>
    <CardDescription>
    <CardTittle>{title}</CardTittle>
    <CardPrice>{price}</CardPrice>
    </CardDescription>
    <ButtonBuy
    onClick={()=> dispatch(AddCardProduct({img, title, price, key, id}))}
    >Comprar</ButtonBuy>
    </CardContainer>
    </>
  )
}
