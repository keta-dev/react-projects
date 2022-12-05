import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setResults } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSearchCocktail = () => {
    setResults(searchValue.current.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            id="name"
            type="text"
            ref={searchValue}
            onChange={handleSearchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
