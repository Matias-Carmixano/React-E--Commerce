import React from 'react'
import { CategoriesProduct } from './CategoriesProduct'
import { useSelector } from 'react-redux'

export const Categories = () => {

  const Categoria = useSelector(state => state.categories.categorie)

  return (
    <>
        {Categoria.map(function(Categoria) {
          return <CategoriesProduct key={Categoria.id} {...Categoria}/>
        })
        }
    </>
  )
}
