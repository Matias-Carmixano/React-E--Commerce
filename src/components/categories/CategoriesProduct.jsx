import React from 'react';
import { CategoriesConta, ContImgCat, ImgCat, TextCat } from './CategoriesStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/CategoriesSlice';


export const CategoriesProduct = ({img, title, categorie}) => {

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
    );
  const dispatch = useDispatch();

    
  
  
  return (
    <>
    <CategoriesConta
    selected={categorie === selectedCategory}
    onClick={ () => dispatch(selectCategory(categorie))}
    >
        <ContImgCat>
          <ImgCat 
          src={img}
          alt={categorie}
          />
        </ContImgCat>
        <TextCat>{title}</TextCat>
    </CategoriesConta>
    </>
  )

}
