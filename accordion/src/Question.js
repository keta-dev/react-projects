import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <p className="title">{title}</p>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          { !showInfo ? <FiPlus /> : <FiMinus /> }
        </button>
      </header>
      {showInfo && <div className='detail'><p className='text'>{info}</p></div>}
    </article>
  );
};

export default Question;
