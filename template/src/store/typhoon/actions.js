import * as types from './mutation-types'
import io from 'service/typhoon/io'
export default {
  async getSpace({ commit, state }) {
    const res = await io.init()
    commit(types.SPACE, res)
  },
}
