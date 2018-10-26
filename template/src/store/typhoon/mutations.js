import * as types from './mutation-types'
export default {
  [types.TEST] (state, result) {
    state.test = result
  },
}
