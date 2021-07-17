import React from 'react'
import './Displayerform.css'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { withResizeDetector } from 'react-resize-detector';
import { searchDetail } from '../../../Redux/Actions';
const Displayerform = ({name,platforms,rating,id,short_screenshots, width, height }) => {
    const dispatch = useDispatch()
    const history =useHistory()
    const handleClick=()=>{
        dispatch({ type: 'RESET', payload: '' })
        dispatch(searchDetail(id))
        history.push('detail')
    }
    return (
        <div className='displayerform-box' onClick={handleClick} id={id}>
                    <div className='displayerform-div'>
                        <div>
                       <div className='displayerform-name'>
                    <h2>{name}</h2>
                       </div>
                       {
                                window.screen.width > 1000?
                           <div className='displayerform-platforms'>
                        <h3>Platforms:</h3> 
                    <p>{platforms.join(', ')}</p>
                        </div>:null
                        }
                        <div className='displayerform-rating'>
                        <h3>Rating:</h3> 
                    <p>{rating}</p>
                        </div>
                        </div>
                   
<div className='displayerform-image-width'>

                        <img className='displayerform-image' src={short_screenshots||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY1iPk0T8_6zyq4OpYdjuh6rlVFwLpzJ1fg&usqp=CAU'} alt="" />
</div>
                        </div>
        </div>
    )
}

export default withResizeDetector(Displayerform)
