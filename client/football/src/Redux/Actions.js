import axios from 'axios'

export const getGames = () => {
    return async (dispatch) => {
        const games = await axios.get('http://localhost:3001/detail')
        dispatch({ type: 'GET_GAMES', payload: games.data})
    }
}

export const getSubscribers = () => {
    return async (dispatch) => {
        const users = await axios.get('/admin/sub')
        dispatch({ type: 'GET_SUBSCRIBERS', payload: users.data})
    }
}