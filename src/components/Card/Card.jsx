import React, { useState, useEffect } from 'react';
import { CardProduct } from './CardProduct';
import { useSelector } from 'react-redux';
import { MarketContainer, ButtonContainer, ButtonSeeLess, ButtonSeeMore } from './CardStyle';
import { InitialLimit, TotalProducts } from '../../data/Products'


export const Card = () => {

  const [Limit, setLimit] = useState(InitialLimit)  

  let Products = useSelector(state => state.products);

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
    );

  if(selectedCategory){
    Products = Products.filter(producto => producto.categorie === selectedCategory);
  };

  useEffect(() => setLimit(InitialLimit), [selectedCategory])
  

  return (
    <>
    <MarketContainer>
    {
      Products.map( (Products, i) =>{
        if (Limit > i) {
          return <CardProduct key={Products.id} {...Products}   />  
        }
        return null;
      })
    }  
    </MarketContainer>
   { !selectedCategory && (<ButtonContainer>
      <ButtonSeeMore
      onClick={() => setLimit(prevLimit => prevLimit + InitialLimit)}
      disabled={TotalProducts <= Limit}
      >Ver Más</ButtonSeeMore>
      <ButtonSeeLess
      onClick={() => setLimit(prevLimit => prevLimit - InitialLimit)}
      disabled={InitialLimit === Limit}
      >
      Ver Menos</ButtonSeeLess>
    </ButtonContainer>)}
    </>    

  )
}
