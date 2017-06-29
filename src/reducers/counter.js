import { Actions } from '../constants'
import { Map } from 'immutable'

const initialState = new Map({
  count: 0
})

function counter(state: Map = initialState, { type, num }: Object): Map {
  switch (action.type) {
    case Actions.COUNTER_ADD:
      return state.set('count', state.get('count') + 1)
    case Actions.COUNTER_RESET:
      return state.set('count', 0)
    case Actions.COUNTER_SET:
      return state.set('count', num)
    default:
      return state
  }
}