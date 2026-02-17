import React, { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

  const themeData = {
    theme: "light"
  }

  return (
    <ThemeDataContext.Provider value={themeData}>
      {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext