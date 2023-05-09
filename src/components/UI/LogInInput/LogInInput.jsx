import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { InputContainerStyled, LogInInputStyled } from './LogInInputStyled'
import { ErrorMessageStyled } from './LogInInputStyled'

export const LogInInput = ({ name, type, placeholder}) => {
  return (
    <Field name={name}>
        {({ field, form: {errors, touched}}) => (
            <InputContainerStyled>
                <LogInInputStyled
                type={type}
                placeholder={placeholder}
                {...field}
                isError={errors[field.name] && touched[field.name]}
                />
                
                <ErrorMessage name={field.name}>
                    { message => <ErrorMessageStyled> { message } </ErrorMessageStyled>}
                </ErrorMessage>
            </InputContainerStyled>
        )
        }
    </Field>
  );
};

export default LogInInput;
