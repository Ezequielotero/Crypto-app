import React, { useEffect , useState } from 'react'

import { getGames } from '../../../Redux/Actions'
import { useDispatch ,shallowEqual, useSelector} from 'react-redux';

import Loading from '../../Loading/Loading'
import Displayerform from './Displayerform';
import './Displayer.css'
import Filters from './Filters/Filters';
const Displayer = () => {
    let dispatch=useDispatch()
    const all = useSelector(state => state.all)
    const maped = useSelector(state => state.maped,shallowEqual)
    let sliced = maped.length>0?maped:all
    useEffect(()=>{
        if(!all[0]){
            dispatch(getGames())
        }
    },[])
    
    if (!all[0]) {
        return <Loading/>
    }else{

        return (
            <div className='displayer-box'>
        <div className='displayer-div'>
            {
                sliced.slice(0,5).map(p=>{
                    return(
                        <Displayerform short_screenshots={p.short_screenshots[0]} name={p.name} id={p.id} rating={p.rating} platforms={p.platforms} />
                        )
                    })
                }
        </div>
            <div className='displayer-filters'>
                <Filters></Filters>
            </div>
                </div>
    )
    
}
}

export default Displayer
