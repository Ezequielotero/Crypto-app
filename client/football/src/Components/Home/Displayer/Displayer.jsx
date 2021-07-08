import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { getGames } from '../../../Redux/Actions'
import { useDispatch , useSelector} from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Loading from '../../Loading/Loading'
import Displayerform from './Displayerform';
import './Displayer.css'
const Displayer = () => {
    let dispatch=useDispatch()
    const [loading, setLoading]=useState(true)
    const all = useSelector(state => state.all)
    useEffect(()=>{
        if(!all[0]){
            dispatch(getGames())
        }
    },[])
    useEffect(()=>{
        if (all[2]) {
            setLoading(false)
        }
    },[all])
  

console.log(loading)
if (loading) {
    return <Loading/>
}
    return (
        <div className='displayer-div'>
            {
               all.slice(0,5).map(p=>{
                   return(
                   <Displayerform short_screenshots={p.short_screenshots[0]} name={p.name} id={p.id} rating={p.rating} platforms={p.platforms} />
                )
                })
            }
        </div>
    )

}

export default Displayer
