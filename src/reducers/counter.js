import { COUNTER_ADD, COUNTER_RESET, COUNTER_SET } from 'constants/actions'
import { Map } from 'immutable'

const initialState = new Map({
  count: 0
})

export default function counter(state: Map = initialState, { type, num }: Object): Map {
  switch (type) {
    case COUNTER_ADD:
      return state.set('count', state.get('count') + 1)
    case COUNTER_RESET:
      return state.set('count', 0)
    case COUNTER_SET:
      return state.set('count', num)
    default:
      return state
  }
}