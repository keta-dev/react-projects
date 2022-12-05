import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try{
        const response = await fetch(url + id)
        const json = await response.json()
        if(json.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = json.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = { name, image, info, category, glass, instructions, ingredients }
          setData(newCocktail)
        }else {
          setData(null)
        }
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if(loading) {
    return <Loading />
  }
  if(data === null) {
    return <h2 className="section-title">No cocktail</h2>
  }
  
  const { name, image, category, info, glass, instructions, ingredients } = data;
  return (
    <section className='section cocktail-section'>
      <Link to="/" className='btn btn-primary'>back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>{name}
          </p>
          <p>
            <span className="drink-data">category:</span>{category}
          </p>
          <p>
            <span className="drink-data">info:</span>{info}
          </p>
          <p>
            <span className="drink-data">glass:</span>{glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>{instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
