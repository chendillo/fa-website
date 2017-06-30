import { actions } from '../constants'

export function test1() {
  return { type: actions.TEST_1, text: 'test 1' }
}

export function test2() {
  return { type: actions.TEST_2, text: 'test 2' }
}

export function test3(num: number) {
  return { type: actions.TEST_3, text: 'test 3' }
}