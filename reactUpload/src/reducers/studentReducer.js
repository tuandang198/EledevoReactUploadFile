/* eslint-disable import/no-anonymous-default-export */
import * as types from '../constant'
const initialState = {
	listStudent: [],
	isFetching: false,
	dataFetched: false,
	error: false,
	errorMessage: null
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case types.GET_ITEM_REQUEST:
		case types.ADD_ITEM_REQUEST:
		case types.DELETE_ITEM_REQUEST:
		case types.UPDATE_ITEM_REQUEST:
			return {
				...state,
				isFetching: true,
				dataFetched: false,

			}
		case types.GET_ITEM_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataFetched: true,
				listStudent: payload.studentData
			}
		case types.ADD_ITEM_SUCCESS:
		case types.DELETE_ITEM_SUCCESS:
		case types.UPDATE_ITEM_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataFetched: true,
			}
		case types.GET_ITEM_FAILURE:
		case types.ADD_ITEM_FAILURE:
		case types.DELETE_ITEM_FAILURE:
		case types.UPDATE_ITEM_FAILURE:
			return {
				...state,
				isFetching: false,
				dataFetched: false,
				error: true,
				errorMessage: payload.errorMessage
			}
		default:
			return state
	}
}
