import React from 'react'
import { InputStyled, LabelStyled, InputContainer, ErrorMessageStyled } from './InputStyle'
import { ErrorMessage, Field } from 'formik'

export const Input = ({ children, name, htmlFor, type, id, placeholder,title}) => {
  return (
    <Field name={name}>
       { ({ field, form: {errors, touched} })=>(
            <InputContainer>
            <LabelStyled htmlFor={htmlFor}>{title}{children}</LabelStyled>
            <InputStyled
            type={type} 
            id={id} 
            {...field}
            isError={errors[field.name] && touched[field.name]}
            placeholder={placeholder}/>
            <ErrorMessage name={field.name}>
                {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
            </ErrorMessage>
        </InputContainer>
        ) 
       }          
    </Field>
  );
};
