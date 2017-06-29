import { Actions } from '../constants'
import { Map } from 'immutable'

const initialState = new Map({
  testText: ''
})

function testTexter(state: Map = initialState, { type, text }: Object): Map {
  switch (type) {
    case Actions.TEST_1:
      return state.set('testText', text)
    case Actions.TEST_2:
      return state.set('testText', text)
    case Actions.TEST_3:
      return state.set('testText', text)
    default:
      return state
  }
}