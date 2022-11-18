import React, { useState } from 'react';
import data from './data';

function App() {
  const [lorem, setLorem] = useState(data);
  const [count, setCount] = useState(0);
  console.log(lorem)
  const checkMate = lorem.length;
  console.log(checkMate);
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor='amount'>paragraphs:</label>
        <input type="text" placeholder='number please...' />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        <p>lorem text</p>
      </article>
    </section>
  )
}

export default App;
