import React, { useState } from 'react';
import data from './data';

function App() {
  const [lorem, setLorem] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) amount = 1;
    if (count > data.length) amount = data.length;
    setLorem(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type="number" 
          name="amount"
          placeholder='number please...'
          value={count}
          onChange={(e) => setCount(e.target.value)} 
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {lorem.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </article>
    </section>
  )
}

export default App;
