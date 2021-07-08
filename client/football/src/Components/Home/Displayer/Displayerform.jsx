import React from 'react'
import './Displayerform.css'
const Displayerform = ({name,platforms,rating,id,short_screenshots}) => {
    return (
        <div className='displayerform-box' id={id}>
                    <div className='displayerform-div'>
                        <div>
                       <div className='displayerform-name'>
                    <h2>{name}</h2>
                       </div>
                        <div className='displayerform-platforms'>
                        <h3>Platforms:</h3> 
                    <p>{platforms.join(', ')}</p>
                        </div>
                        <div className='displayerform-rating'>
                        <h3>Rating:</h3> 
                    <h4>{rating}</h4>
                        </div>
                        </div>
                   
<div className='displayerform-image-width'>

                        <img className='displayerform-image' src={short_screenshots} alt="" />
</div>
                        </div>
        </div>
    )
}

export default Displayerform
