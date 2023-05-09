import React from 'react'
import { CategoriesWrapper, HomeContainer, Title, RecommendedWrapper, ProductContainer} from './HomeStyles'
import { Hero } from '../../components/hero/Hero'
/*import { Market } from '../../components/market/Market'*/
import { RecommendedCard } from '../../components/Recommended/RecommendedCard'
import { Categories } from '../../components/categories/Categories'
import { Card } from '../../components/Card/Card'


export const Home = () => {


  return (
      <>
      <HomeContainer>
          <Hero/>
          <Title>Recomendado</Title>
          <RecommendedWrapper>
            <RecommendedCard/>
          </RecommendedWrapper>
          <CategoriesWrapper>
            <Categories/>
          </CategoriesWrapper>
          <ProductContainer>
          <Card/>
          </ProductContainer>
      </HomeContainer>
      </>
  )
}
