import * as types from '../constant'

export function getStudentRequest(payload){
	return({
		type: types.GET_ITEM_REQUEST,
		payload
	})
}

export function getStudentSuccess(payload){
	return({
		type: types.GET_ITEM_SUCCESS,
		payload
	})
}
export function getStudentFailure(payload){
	return({
		type: types.GET_ITEM_FAILURE,
		payload
	})
}

export function addStudentRequest(payload){
	return({
		type: types.ADD_ITEM_REQUEST,
		payload
	})
}

export function addStudentSuccess(payload){
	return({
		type: types.ADD_ITEM_SUCCESS,
		payload
	})
}
export function addStudentFailure(payload){
	return({
		type: types.ADD_ITEM_FAILURE,
		payload
	})
}

export function updateStudentRequest(payload){
	return({
		type: types.UPDATE_ITEM_REQUEST,
		payload
	})
}

export function updateStudentSuccess(payload){
	return({
		type: types.UPDATE_ITEM_SUCCESS,
		payload
	})
}
export function updateStudentFailure(payload){
	return({
		type: types.UPDATE_ITEM_FAILURE,
		payload
	})
}

export function deleteStudentRequest(payload){
	return({
		type: types.DELETE_ITEM_REQUEST,
		payload
	})
}

export function deleteStudentSuccess(payload){
	return({
		type: types.DELETE_ITEM_SUCCESS,
		payload
	})
}
export function deleteStudentFailure(payload){
	return({
		type: types.DELETE_ITEM_FAILURE,
		payload
	})
}