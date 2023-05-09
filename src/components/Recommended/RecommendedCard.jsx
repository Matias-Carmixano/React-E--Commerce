import React from 'react';
import { useSelector } from 'react-redux';
import { RecommendedProduct } from './RecommendedProduct';


export const RecommendedCard = () => {

  const Recomendado = useSelector( state => state.recommended)

  return (
  <>
    {Recomendado.map(function(Recomendado){
  return <RecommendedProduct
        key={Recomendado.id}
        img={Recomendado.img}
        title={Recomendado.title}
        price={Recomendado.price}
        recomended={Recomendado.recomended}
        id={Recomendado.id}
        />
    })}
  </>
  )
}
