import React, { useState } from 'react';
import data from './data';

const List = () => {
  const [birthday, setBirthday] = useState(data);

  return (
    <section className="container">
      <h3>{birthday.length} birthdays today</h3>

      {birthday.map((birth) => {
        const { name, age, image, id } = birth;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
       <button onClick={() => setBirthday([])}>Clear All</button>
    </section>
  );
};

export default List;
