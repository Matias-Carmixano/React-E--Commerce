import React from 'react'
import { ButtonGoogleLog, ButtonLog, ContainerButtons, Forgot, Form, RefInput, Registrate, Text, Tittle } from './IniciarSesionStyle'
import { Formik } from 'formik'
import { logInInitialValues, logInValidationSchema } from '../../formik'
import { createUserProfileDocument, signInUser, signInWithGoogle } from '../../firebase/firebaseUtils'
import { InputContainerStyled, LogInInputStyled } from '../UI/LogInInput/LogInInputStyled'



export const IniciarSesion = () => {
  return (
    <>
    <InputContainerStyled>
      <Tittle>Iniciar Sesion</Tittle>
      <Formik
        initialValues={logInInitialValues}
        validationSchema={logInValidationSchema}
        onSubmit={async values => {
          try {
            const { user } = await signInUser(values.email, values.password)
            createUserProfileDocument(user);
          } catch (error) {
            alert('datos incorrectos');
          }
        }}
      >      
        <Form>
          <RefInput>Email</RefInput>
          <LogInInputStyled name='email' placeholder='Email...' type='text'/>
          <RefInput>Contraseña</RefInput>
          <LogInInputStyled name='password' placeholder='Contraseña...' type='password'/>
        <Forgot>¿Olvidaste tu contraseña?</Forgot>
        <ContainerButtons>
          <ButtonLog
          
          >Iniciar Sesion</ButtonLog>
          <ButtonGoogleLog
            onClick={signInWithGoogle}
          >Google</ButtonGoogleLog>
          </ContainerButtons>
        <Text>¿No tenes cuenta?<Registrate to='/register'>Registrate</Registrate></Text>
      </Form>  
      </Formik>
      </InputContainerStyled>
    </>
  )
}
