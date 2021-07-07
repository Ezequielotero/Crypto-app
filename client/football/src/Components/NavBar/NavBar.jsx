import React,{useEffect,useState} from 'react'
import './NavBar.css'
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
          <p>text</p> 
        </div>
    )
}

export default NavBar
