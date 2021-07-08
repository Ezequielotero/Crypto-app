import React from 'react'
import Divider from '@material-ui/core/Divider';
import './Displayerform.css'
const Displayerform = ({name,platforms,rating,id,short_screenshots}) => {
    return (
        <div className='displayerform-box' id={id}>
                    <div className='displayerform-div'>
                    <h2>{name}</h2>
                        <div>
                        <h3>Platforms</h3> 
                    <p>{platforms.join(', ')}</p>
                        </div>
                        <div>
                        <h3>Rating</h3> 
                    <h4>{rating}</h4>
                        </div>
                    </div>
                        <img className='displayerform-image' src={short_screenshots} alt="" />
        </div>
    )
}

export default Displayerform
