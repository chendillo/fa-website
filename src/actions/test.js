import { Actions } from 'contants'

export function test1() {
  return { type: Actions.TEST_1, text: 'test 1' }
}

export function test2() {
  return { type: Actions.TEST_2, text: 'test 2' }
}

export function test3(num: number) {
  return { type: Actions.TEST_3, text: 'test 3' }
}