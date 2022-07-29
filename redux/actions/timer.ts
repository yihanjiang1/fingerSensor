import { TIMER } from '../constants';
export function changeCount(count) {
  return {
  type: TIMER,
  payload: count
  }
}
