import React,{useState} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { searchTitle } from '../../../Redux/Actions'
import { getGames } from '../../../Redux/Actions'
import Input from '@material-ui/core/Input';
import './Searchbar.css'
import Button from '@material-ui/core/Button';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
const Searchbar = () => {
    let dispatch=useDispatch()
    const [state,setState] = useState('')
    const handleChange = (e)=>{
        setState(e.target.value)
    }
    const handlePost = (e)=>{
        console.log('hola')
        dispatch(searchTitle(state))
    }
    const handleReset = (e)=>{
        dispatch({ type: 'RESET', payload: '' })
        dispatch(getGames())
    }
    return (
        <div className='searchbar-div'>
          <Input placeholder="Search videogames" onChange={handleChange} inputProps={{ 'aria-label': 'description' }} />
        <SearchSharpIcon  onClick={handlePost}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Searchbar
