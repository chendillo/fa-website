import { actions } from '../constants'

export function add() {
  return { type: actions.COUNTER_ADD }
}

export function reset() {
  return { type: actions.COUNTER_RESET}
}

export function set(num: number) {
  return { type: actions.COUNTER_SET, num }
}