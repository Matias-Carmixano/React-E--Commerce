import React from 'react'
import { CheckoutProductSection, Count, CountContainer, Money, Noproducts, ProductContainer, Reference, Total, TuPedido } from './CheckoutProductStyle'
import { CardProductCheckout } from './CardProductCheckout'


export const CheckoutProduct = ({cartItems, shippingCost, price}) => {


  return (
    <CheckoutProductSection>
      <TuPedido>Tu pedido</TuPedido>
      <ProductContainer>
        {
          cartItems.length ? (
            cartItems.map(item=> <CardProductCheckout key={item.id} {...item}/>)
          ) : (
            <Noproducts>No compraste Nada</Noproducts> 
          )
        }
      </ProductContainer>
      <CountContainer>
                <Count><Reference>Subtotal:</Reference><Money>${price}</Money></Count>
                <Count><Reference>Envio:</Reference><Money>${shippingCost}</Money></Count>
                <Count><Reference><Total>Total:</Total></Reference><Money><Total>${price + shippingCost}</Total></Money></Count>
        </CountContainer>
    </CheckoutProductSection>
  )
}
