import { combineReducers, createStore } from 'redux'
import * as reducers from 'reducers'

const allReducers = combineReducers(reducers)
const store = createStore(allReducers)

export default store
