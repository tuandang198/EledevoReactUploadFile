import * as types from '../constant'
import * as actions from '../actions/index'
import {put, takeEvery} from 'redux-saga/effects'
import getAPI from '../fetchAPI/getItems'
import addAPI from '../fetchAPI/addAPI'
import updateAPI from '../fetchAPI/updateAPI'
import deleteAPI from '../fetchAPI/deleteAPI'

function* getStudent(action){
	try {
		const res = yield getAPI(action.payload)
		yield put(actions.getStudentSuccess(res))
	} catch (error) {
		yield put(actions.getStudentFailure(error))
	}
}

function* deleteStudent(action){
	try {
		yield deleteAPI(action.payload)
		yield put(actions.deleteStudentSuccess())
		yield put(actions.getStudentRequest())
	} catch (error) {
		yield put(actions.deleteStudentFailure(error))
	}
}

function* addStudent(action){
	try {
		yield addAPI(action.payload)
		yield put(actions.addStudentSuccess())
		yield put(actions.getStudentRequest())
	} catch (error) {
		yield put(actions.addStudentFailure(error))
	}
}

function* updateStudent(action){
	try {
		yield updateAPI(action.payload)
		yield put(actions.updateStudentSuccess())
		yield put(actions.getStudentRequest())
	} catch (error) {
		yield put(actions.updateStudentFailure(error))
	}
}
export const studentSaga = [
	takeEvery(types.GET_ITEM_REQUEST,getStudent),
	takeEvery(types.ADD_ITEM_REQUEST,addStudent),
	takeEvery(types.DELETE_ITEM_REQUEST,deleteStudent),
	takeEvery(types.UPDATE_ITEM_REQUEST,updateStudent)
]