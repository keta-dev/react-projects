import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

// http://www.omdbapi.com/?i=tt3896198&apikey=36cb2c0d
// 36cb2c0d
function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/movies/:id" element={<Movie />} />
  </Routes>
  )
}

export default App
