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
    console.log(detail[0].requirements[0].requirements.minimum)
    return (
        <div >
             <div className='detail-div'>
                 <div className='detail-div2'>
                 <div className='detail-name' >
                <h3 className='flux2'>{detail[0]?.name}</h3>
                 </div>
                 <div className='filters-box3'>
                 <div className='filters-box2'>
                <img className='detail-img' src={detail[0]?.background} alt="" />
                 </div>
                </div>
                 <div className='detail-realising'>
                 <p>Realising date: {detail[0]?.released} </p>
                 <p>Platforms: {detail[0]?.platforms.join(', ')}</p>
                 <p>Genres: {detail[0]?.genres.join(', ')}</p>
                 <h3>{detail[0]?.description.replace(/(<([^>]+)>)/ig, '')}</h3>
                 <p>Minimun requirements: {detail[0].requirements[0].requirements.minimum}</p>
                 <p>recommended requirements: {detail[0].requirements[0].requirements.recommended}</p>
                 
                 </div>
                 <div>
             </div>
                 </div>
                 </div>
        </div>
    )
}

export default Detail
