import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [question, setQuestion] = useState(data);
  console.log(question);

  return (
    <main>
    <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
        {question.map((one) => {
          return (
            <SingleQuestion key={one.id} {...one} ></SingleQuestion>
          )
        })}
      </section>
    </div>
  </main>
  );
}

export default App;
