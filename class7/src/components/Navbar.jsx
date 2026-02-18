import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"

const Navbar = () => {
  const data = useContext(ThemeDataContext)
  return (
    <div>Navbar-{data}</div>
  )
}

export default Navbar