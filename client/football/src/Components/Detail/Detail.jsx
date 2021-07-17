import React, {useState} from 'react'
import {useSelector } from'react-redux'
import Loading from '../Loading/Loading'
import Grow from '@material-ui/core/Grow';
import './Detail.css'
const Detail = () => {
    const detail = useSelector(state => state.detail)
    if (!detail[0]) {
        return <Loading/>
    }
    return (
        <div >
             <div className='detail-div'>
                 <div className='detail-div2'>
                 <div className='detail-name' >
                <h3 className='flux2'>{detail[0]?.name}</h3>
                 </div>
                 <div className='filters-box3'>
                 <div className='filters-box2'>
                <img className='detail-img' src={detail[0]?.background||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY1iPk0T8_6zyq4OpYdjuh6rlVFwLpzJ1fg&usqp=CAU'} alt="" />
                 </div>
                </div>
                 <div className='detail-realising'>
                 <p><h2>Realising date:</h2>{detail[0]?.released} </p>
                 <p><h2>Platforms:</h2>{detail[0]?.platforms.join(', ')}</p>
                 <p><h2>Genres:</h2>{detail[0]?.genres.join(', ')}</p>
                 <p><h2>Description:</h2>{detail[0]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
                 <p><h2>Minimun requirements:</h2>{detail[0].requirements[0]?.requirements.minimum ||'We dont have pc requirements'}</p>
                 <p><h2>Recommended requirements:</h2>{detail[0].requirements[0]?.requirements.recommended|| 'We dont have pc requirements'} </p>
                 
                 </div>
                 <div>
             </div>
                 </div>
                 </div>
      
        </div>
    )
}

export default Detail
