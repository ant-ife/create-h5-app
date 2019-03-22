import * as types from './mutation-types'
export default {
  [types.SPACE](state, res) {
    state.space = res.message
  },
}
