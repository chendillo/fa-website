import { actions } from '../constants'

export function add(): Object {
  return { type: actions.COUNTER_ADD }
}

export function reset(): Object {
  return { type: actions.COUNTER_RESET}
}

export function set(num: number): Object {
  return { type: actions.COUNTER_SET, num }
}