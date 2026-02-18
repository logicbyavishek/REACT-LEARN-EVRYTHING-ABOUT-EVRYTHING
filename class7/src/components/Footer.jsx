import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
  const [theme, setTheme]=useContext(ThemeDataContext)
  return (
    <div>
      <h2>Footer-{theme}</h2>
    </div>
  )
}

export default Footer