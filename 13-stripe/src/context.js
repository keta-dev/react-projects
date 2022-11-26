import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children}) => {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(true);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page:'', links:[]});

  const openSidebar = () => {
    setSidebar(true)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setSubmenu(true)
  }

  const closeSubmenu = () => {
    setSubmenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        submenu,
        sidebar,
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider, AppContext};