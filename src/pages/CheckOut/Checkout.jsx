import React from 'react'
import { CheckoutWrapper } from './CheckoutStyle'
import { FormCheckout } from '../../components/checkout/FormCheckout'
import { CheckoutProduct } from '../../components/pcheckout/CheckoutProduct'
import { useSelector } from 'react-redux'

export const Checkout = () => {

  const { cartItems, shippingCost} = useSelector(state => state.cart)

  const price = cartItems.reduce((acc, item)=>{
    return (acc += item.price * item.quantity)
  },0)


  return (
    <CheckoutWrapper>
        <FormCheckout
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
        />
        <CheckoutProduct
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
        />
    </CheckoutWrapper>
  )
}
