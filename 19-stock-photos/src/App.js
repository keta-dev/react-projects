import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading , setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const mounted = useRef(false)
  const [newImages, setNewImages] = useState(false);

  const fetchImageData = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }
    
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhoto) => {
        if(query && page === 1) {
          return data.results
        } else if(query) {
          return [...oldPhoto, ...data.results]
        } else {
          return [...oldPhoto, ...data]
        }
      });
      setNewImages(false)
      setLoading(false)
    } catch (err) {
      setNewImages(false)
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchImageData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  // when we trigger the scroll event
  useEffect(() => {
    if(!mounted.current) {
      mounted.current = true;
      return;
    }
    if(!newImages) return;
    if(loading) return;
    setPage((oldPage) => oldPage + 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newImages])

  const event = () => {
    if (!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query) return;
    if(page === 1) {
      fetchImageData();
      return;
    }
    setPage(1)
  }

  return (
    <main>
      <section className="section">
        <form className="search-form">
          <input type="text" placeholder='search'
            className="form-input" value={query}
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button type='submit' className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
