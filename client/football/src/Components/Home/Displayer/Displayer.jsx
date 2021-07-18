import React, { useEffect , useState } from 'react'
import { getGames } from '../../../Redux/Actions'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { withResizeDetector } from 'react-resize-detector';
import { useDispatch ,shallowEqual, useSelector} from 'react-redux';
import Loading from '../../Loading/Loading'
import Displayerform from './Displayerform';
import './Displayer.css'
import Filters from './Filters/Filters';
import Popup from './Filters/Popup/Popup';
const Displayer = ({ width, height }) => {
    let dispatch=useDispatch()
   
    const all = useSelector(state => state.all)
    const maped = useSelector(state => state.maped,shallowEqual)
    let sliced = maped.length>0?maped:all
    const [game, setGame]=useState(0)
    const [gamemax, setGamemax]=useState(sliced.length)
    const [state,SetState]=useState(false)
    const handleClicksum =()=>{
        if (!(game + 5 >= gamemax)) {
            setGame(game+5)
        }
    }
    const handleClickrest =(e)=>{
        if (game>0) {
            setGame(game-5)
        }
    }

    useEffect(()=>{
        if(!all[0]){
            dispatch(getGames())
        }
    },[])
    
    useEffect(()=>{
        setGamemax(sliced.length)
        setGame(0)
    },[sliced])

    const handleClick= ()=>{
        SetState(!state)
    }

    if (!all[0]) {
        return <Loading/>
    }else{

        return (
            <div className='displayer-box'>
        <div className='displayer-div'>
            {
                window.screen.width < 1000?
                <button className='displayer-filter' onClick={handleClick}>Filter</button>:
                null
            }
{
    window.screen.width < 1000&&state===false?
    <div>
    <div className='displayer-popup'>
      <Popup></Popup>
    </div>
  </div>:
    null
}

            {
                sliced.slice(game,game+5).map(p=>{
                    return(
                        <Displayerform short_screenshots={p.short_screenshots[0]} name={p.name} id={p.id} rating={p.rating} platforms={p.platforms} />
                        )
                    })
                }
        </div>

            <div className='displayer-filters'>
        {window.screen.width > 1000?
                <Filters></Filters>:
              null
   
    
  
            }
            <div className='displayer-pagination'>
           <p  onClick={handleClickrest}>{'<'}</p>
           <p>{game/5 +1}</p>
           <p onClick={handleClicksum}>{'>'}</p>
            </div>
            </div>
                </div>
    )
    
}
}

export default withResizeDetector(Displayer)
