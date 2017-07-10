import { COUNTER_ADD, COUNTER_RESET, COUNTER_SET } from 'constants/actions'

export function add(): Object {
  return { type: COUNTER_ADD }
}

export function reset(): Object {
  return { type: COUNTER_RESET}
}

export function set(num: number): Object {
  return { type: COUNTER_SET, num }
}