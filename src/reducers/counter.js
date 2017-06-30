import { actions } from '../constants'
import { Map } from 'immutable'

const initialState = new Map({
  count: 0
})

export default function counter(state: Map = initialState, { type, num }: Object): Map {
  switch (type) {
    case actions.COUNTER_ADD:
      return state.set('count', state.get('count') + 1)
    case actions.COUNTER_RESET:
      return state.set('count', 0)
    case actions.COUNTER_SET:
      return state.set('count', num)
    default:
      return state
  }
}