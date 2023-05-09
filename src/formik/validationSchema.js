import * as Yup from 'yup'
import RegExEmail from '../utils/RegEx'
export  const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo Requerido'),
    phone: Yup.string().required('Campo Requerido'),
    location: Yup.string().required('Campo Requerido'),
    address: Yup.string().required('Campo Requerido'),
})

export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().matches(RegExEmail, 'Mail no valido').required('Campo requerido'),
    password: Yup.string().min(6,'Minimo de caracteres: 6').required('Campo requerido'),
})

export const logInValidationSchema = Yup.object({
    email: Yup.string().matches(RegExEmail, 'Mail no valido').required('Campo requerido'),
    password: Yup.string().min(6,'Minimo de caracteres: 6').required('Campo requerido'),
})

export const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().matches(RegExEmail, 'Mail no valido').required('Campo requerido'),
})

