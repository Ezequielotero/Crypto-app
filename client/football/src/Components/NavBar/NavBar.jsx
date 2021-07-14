import React,{useEffect,useState} from 'react'
import './NavBar.css'
import Searchbar from './Searchbar/Searchbar';
import { Route , Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const NavBar = () => {
    const [width, setWidth] = useState(0);
    const history=useHistory();
  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth
      setWidth(width)
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
  })
  const handleClick = ()=>{
      history.push('/home')
  }
    return (
        <div className='nav-grid'>
          <p onClick={handleClick}>Home</p>
          <div>
         <Route exact path='/home'><Searchbar></Searchbar></Route> 
          </div>
         
        </div>
    )
}

export default NavBar
