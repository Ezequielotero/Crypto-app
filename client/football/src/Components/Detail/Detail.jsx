import React, {useState} from 'react'
import {useSelector } from'react-redux'
import Loading from '../Loading/Loading'
import Grow from '@material-ui/core/Grow';
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
        <div>
             
                 <div>
                <h2>{detail[0]?.name}</h2>
                 </div>
                 <div>
                <h2>{detail[0]?.released}</h2>
                 </div>
                 <div>
                 <p>{detail[0]?.description}</p>
                 </div>
                
                <button onClick={handleClick} value='checked'>ok</button>
        </div>
    )
}

export default Detail
