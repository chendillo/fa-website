import { actions } from '../constants'
import { Map } from 'immutable'

const initialState = new Map({
  testText: ''
})

export default function testTexter(state: Map = initialState, { type, text }: Object): Map {
  switch (type) {
    case actions.TEST_1:
      return state.set('testText', text)
    case actions.TEST_2:
      return state.set('testText', text)
    case actions.TEST_3:
      return state.set('testText', text)
    default:
      return state
  }
}