import axios from 'axios'
import { DATA_LIST_FAIL, DATA_LIST_REQUEST, DATA_LIST_SUCCESS } from '../actionTypes/dataActionTypes'


export const listposts = () => async (dispatch) => {
	try {
		dispatch({ type: DATA_LIST_REQUEST })
		const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts')
        const keys = Object.keys(data[0])
        const payload = {posts: data, keys: keys}
		dispatch({ type: DATA_LIST_SUCCESS, payload: payload })
	} catch (error) {
		dispatch({ type: DATA_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
	}
}

