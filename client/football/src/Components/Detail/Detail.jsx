import React, {useState} from 'react'
import {useSelector } from'react-redux'
import Loading from '../Loading/Loading'
import Grow from '@material-ui/core/Grow';
import './Detail.css'
const Detail = () => {
    const detail = useSelector(state => state.detail)
    const [checked, setChecked]=useState('')
    if (!detail[0]) {
        return '<h1>porfavor elija un juego</h1>'
    }
    const handleClick =(e)=>{
        setChecked(e.target.value)
    }
    return (
        <div className='detail-div'>
             
                 <div className='detail-name' >
                <h3>{detail[0]?.name}</h3>
                 </div>
                 <div className='detail-realising'>
                 <h2>Realising date</h2>
                <h2>{detail[0]?.released}</h2>
                 <div className='filters-box2'>
                <img className='detail-img' src={detail[0]?.background} alt="" />
                 </div>
                 </div>
                 <div>
                 <p>{detail[0]?.description}</p>
                 <p>{detail[0]?.platforms.join(', ')}</p>
                 <p>{detail[0]?.genres.join(', ')}</p>
                 </div>
                
                <button onClick={handleClick} value='checked'>ok</button>
        </div>
    )
}

export default Detail
