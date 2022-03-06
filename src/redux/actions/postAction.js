import axios from 'axios'
import { POST_FAIL, POST_REQUEST, POST_SUCCESS } from '../actionTypes/dataActionTypes'


export const singlepost = (id) => async (dispatch) => {

	try {
		dispatch({ type: POST_REQUEST })

		const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

		dispatch({ type: POST_SUCCESS, payload: res.data })
	} catch (error) {
		dispatch({ type: POST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
	}
}

