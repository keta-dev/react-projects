import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random');

  const getPerson = async () => {
    const response = await fetch(url)
    const json = await response.json();
    const person = json.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const {login: { password }} = person
    const { title, first, last } = person.name
    const { dob: { age } } = person
    const { street: { number, name } } = person.location
    const newPerson = {
      image,
      password,
      age,
      phone,
      email,
      name: `${title} ${first} ${last}`,
      street: `${number} ${name}`,
    }
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  }

  useEffect(() => {
    setLoading(true);
    getPerson(person)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')){
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} alt="random person" className='user-img' />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleValue}>
              <FaUser />
            </button>
            <button className="icon" data-label="email" onMouseOver={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button className="icon" data-label="street" onMouseOver={handleValue}>
              <FaMap />
            </button>
            <button className="icon" data-label="phone" onMouseOver={handleValue}>
              <FaPhone />
            </button>
            <button className="icon" tooltip="lock" data-label="password" onMouseOver={handleValue}>
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={getPerson}>{loading ? 'loading...' : 'random user'}</button>
        </div>
      </div>
    </main>
  )
}

export default App
