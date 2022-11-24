import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
// import logo from './logo.svg'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linkContainerRef = useRef(null)
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    // console.log(linksHeight)
    if(show) {
      linkContainerRef.current.style.height = linksHeight + 'px'
    } else {
      linkContainerRef.current.style.height = '0px'
    }
  }, [show])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <p className="logo-text">JS<span className='small-text'>Minions</span></p>
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container" ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}><a href={url}>{text}</a></li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { id, url, icon } = icons
            return (
              <li key={id}><a href={url}>{icon}</a></li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
