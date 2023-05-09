import React from 'react'
import { ButtonRecommended, DescCont, ImgCont, ImgReco, PriceReco, RecoCard, Tittle } from './RecommendedStyles'
import { useDispatch } from 'react-redux';
import { AddCardProduct } from '../../redux/cart/CartSlice'

export const RecommendedProduct = ({img, title, price, recommended, key, id}) => {

  
  const dispatch = useDispatch();

  return (
    <>
        <RecoCard recomended={recommended}>
            <ImgCont>
                <ImgReco src={img}/>
            </ImgCont>
            <DescCont>
                <Tittle>{title}</Tittle>
                <PriceReco>{price}</PriceReco>
                <ButtonRecommended
                onClick={()=> dispatch(AddCardProduct({img, title, price, key, id}))}
                >Comprar</ButtonRecommended>
            </DescCont>
        </RecoCard>
    </>
  )
}
