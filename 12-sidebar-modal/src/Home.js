import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { useGlobalContext } from './context'

const Home = () => {
  // method one
  // const data = useContext(AppContext);
  // method two
  const { openModal, openSidebar } = useGlobalContext();
  console.log('sidebar', openSidebar)
  console.log('modal', openModal);
  
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <HiOutlineMenu />
      </button>
      <button onClick={openModal} className="btn">show modal</button>
    </main>
  )
}

export default Home
