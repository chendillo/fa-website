import { Actions } from 'contants'

export function add() {
  return { type: Actions.COUNTER_ADD }
}

export function reset() {
  return { type: Actions.COUNTER_RESET}
}

export function set(num: number) {
  return { type: Actions.COUNTER_SET, num }
}