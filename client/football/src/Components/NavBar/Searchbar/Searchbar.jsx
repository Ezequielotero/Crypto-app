import React,{useState} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { searchTitle } from '../../../Redux/Actions'
import { getGames } from '../../../Redux/Actions'
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
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handlePost}>search</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Searchbar
