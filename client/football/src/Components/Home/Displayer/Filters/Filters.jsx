import React, { useEffect , useState } from 'react'
import './Filters.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getGenres, getPlatforms } from '../../../../Redux/Actions'
import { order } from '../../../../Redux/Actions'
import { useDispatch , useSelector} from 'react-redux';
const Filters = ({status}) => {
  let dispatch=useDispatch()
  const genres = useSelector(state => state.genres)
  const all = useSelector(state => state.all)
  const platforms = useSelector(state => state.platforms)
  useEffect(()=>{
    if(!genres[0]){
        dispatch(getGenres())
        dispatch(getPlatforms())
    }
},[genres])
const [orders, setOrders]=useState('')
const [genreSelected, setGenreSelected]=useState('')
const [plaftorm, setPlatform]=useState('')
const handleOrders =(e)=>{
setOrders(e.target.value)
}
const handleGenres =(e)=>{
  setGenreSelected(e.target.value)
}
const handlePlatforms =(e)=>{
  setPlatform(e.target.value)
}
const handleFilter =(e)=>{
   dispatch(order(all,orders,genreSelected,plaftorm))
}
console.log(plaftorm)
    return (
        <div className='filters-box'>
              <FormControl >
            <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
        className='filters-menu'
          id="demo-simple-select"
          onClick={handleOrders}
        >
          <MenuItem  value={'up'}>Rating up</MenuItem>
          <MenuItem value={'down'}>Rating down</MenuItem>
        </Select>
        </FormControl>
        <FormControl >
            <InputLabel id="demo-simple-select-label">Genres</InputLabel>
        <Select
        onClick={handleGenres}
        className='filters-menu'
          id="demo-simple-select"
        >
          {
              genres&&genres.map((g)=>{
                return <MenuItem  value={g.name}>{g.name}</MenuItem>
              })
          }
        </Select>
        </FormControl>
        <FormControl >
            <InputLabel id="demo-simple-select-label">Platforms</InputLabel>
        <Select
        onClick={handlePlatforms}
        className='filters-menu'
          id="demo-simple-select"
        >
          {
              platforms&&platforms.map((p)=>{
                return <MenuItem  value={p.name}>{p.name}</MenuItem>
              })
          }
        </Select>
        </FormControl>
        <button onClick={handleFilter}>ok</button>
        </div>
    )
}

export default Filters
