import React from 'react'
import { CheckoutSectionForm, Title, FormCheck, IniciarCompra, ContainerInputs } from './FormCheckoutStyle'
import {checkoutInitialValues, checkoutValidationSchema} from '../../formik/index'
import { Input } from '../UI/Input/Input'
import { Formik } from 'formik'
export const FormCheckout = ({ cartItems }) => {
  return (

    <CheckoutSectionForm>
        <Title>
            Ingresa tus datos
        </Title>
        <Formik
  initialValues={checkoutInitialValues}
  validationSchema={checkoutValidationSchema}
  onSubmit={values => console.log(values)}
  >
        <FormCheck>
          <ContainerInputs>
              <Input
              placeholder='  Tu Nombre'
              name='name'
              type='text'
              id='name'
              htmlFor='name'
              title='Nombre'
              />
              <Input
              placeholder='  Tu Celular'
              name='phone'
              id='phone'
              type='text'
              htmlFor='phone'
              title='Telefono'
              />
            </ContainerInputs> 
          <ContainerInputs>
            <Input
              placeholder='  Tu Localidad'
              name='location'
              type='text'
              id='location'
              htmlFor='location'
              title='Localidad'
            />
            <Input
              placeholder='  Tu Direccion'
              name='address'
              type='text'
              id='address'
              htmlFor='address'
              title='Direccion'
            />
          </ContainerInputs>
          <IniciarCompra
          disabled='false'>Iniciar Compra</IniciarCompra>
        </FormCheck>
        </Formik>
    </CheckoutSectionForm>
    
  )
}
