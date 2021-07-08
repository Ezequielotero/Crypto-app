import React,{useEffect,useState} from 'react'
import './NavBar.css'
import Searchbar from './Searchbar/Searchbar';
const NavBar = () => {
    const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth
      setWidth(width)
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
  })
    return (
        <div className='nav-grid'>
          <Searchbar></Searchbar>
        </div>
    )
}

export default NavBar
