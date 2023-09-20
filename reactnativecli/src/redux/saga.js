import { takeEvery, put } from 'redux-saga/effects'
import { SET_USER_DATA, USER_LIST } from './constants'

function* userList() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    let data = yield fetch(url)
    data = yield data.json()
    // console.warn('data in saga', data);
    yield put({ type: SET_USER_DATA, data })
}

function* sagaData() {
    yield takeEvery(USER_LIST, userList)
}

export default sagaData
