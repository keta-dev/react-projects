import React, { Fragment, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#e34ab1').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    }
    catch(error) {
      setError(true);
    }
    setColor('')
  }

  return (
    <Fragment>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="" 
            placeholder='Enter Hex Number'
            value={color}
            onChange={(e) => {setColor(e.target.value)}}
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          // console.log(color)
          <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        ))}
      </section>
    </Fragment>
  )
}

export default App
