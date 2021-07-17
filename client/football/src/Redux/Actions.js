import axios from 'axios'

export const getGames = () => {
    return async (dispatch) => {
        const games = await axios.get('http://localhost:3001/detail')
        dispatch({ type: 'GET_GAMES', payload: games.data})
    }
}

export const getGenres = () => {
    return async (dispatch) => {
        const genres = await axios.get('http://localhost:3001/genres')
        dispatch({ type: 'GET_GENRES', payload: genres.data})
    }
}
export const searchTitle = (title) => {
    return async (dispatch) => {
        const resp = await axios.get('http://localhost:3001/search?name='+ title)
        if (typeof resp.data === 'string') {
            return alert(resp.data)
        }
        else{
            dispatch({ type: 'SEARCH', payload: resp.data})
        }
    }
}
export const getPlatforms = () => {
    return async (dispatch) => {
        const resp = await axios.get('http://localhost:3001/platforms')
        dispatch({ type: 'PLATFORMS', payload: resp.data})
    }
}
export const order =(array,order,genre,platform)=>{
    return (dispatch) => {
        if (order==='up') {
            array.sort((a, b) => a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0)
        }
        if (order==='down') {
            array.sort((a, b) =>a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0)
        }
        if (genre) {
           array= array.filter((p)=>p.genres.includes(genre))
           if(array.length===0) alert('none')
        }
        if (platform) {
            array= array.filter((p)=>p.platforms.includes(platform))
            if(array.length===0) alert('none')
         }
         if (array.length>0) {
             dispatch({type:'FILTERED',payload:array})
            }
    }
}
export const searchDetail = (id) => {
    return async (dispatch) => {
        const resp = await axios.get('http://localhost:3001/detail/'+id)
        dispatch({ type: 'DETAIL', payload: resp.data})
    }
}
