import { DATA_LIST_FAIL, DATA_LIST_REQUEST, DATA_LIST_SEARCH, DATA_LIST_SUCCESS } from '../actionTypes/dataActionTypes'

const dataReducer = (state = { posts: [], keys: [] }, action) => {
	switch (action.type) {
		case DATA_LIST_REQUEST:
			return { loading: true, posts: [], keys: [] }
		case DATA_LIST_SUCCESS:
			return { loading: false, posts: action.payload.posts, keys: action.payload.keys, searched: action.payload.posts }

		case DATA_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export default dataReducer
