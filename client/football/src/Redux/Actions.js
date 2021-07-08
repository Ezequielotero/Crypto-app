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
