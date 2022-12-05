import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log('cocktail list', cocktails);

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>no cocktail matched your search</h2>
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  )
}

export default CocktailList
