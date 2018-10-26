import * as types from './mutation-types'
import io from 'service/typhoon/io'
export default {
  async getTest ({commit, state}) {
    const result = await io.init()
    commit(types.TEST, result)
  },
}
