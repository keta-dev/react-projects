import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);

  const openSidebar = () => {
    setSidebar(true)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        modal,
        sidebar,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}