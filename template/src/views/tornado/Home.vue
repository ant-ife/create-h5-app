<template>
  <div class="body">
    <Icon name="tornado" />
    <div class="title">
      {{ $t('Welcome') }}{{ test }}{{ msg }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { loadLanguageAsync } from 'utils/i18n'
import { sleep } from 'utils'
export default {
  async created () {
    await sleep(2000)
    await loadLanguageAsync('tornado', 'zh-CN')
    await sleep(2000)
    await loadLanguageAsync('tornado', 'en-US')
  },
  data () {
    return {
      msg: this.$t('msg'),
    }
  },
  computed: {
    ...mapState([
      'test',
    ]),
  },
  methods: {
    ...mapActions([
      'getTest',
    ]),
  },
}
</script>

<style lang="less" scoped>
.body {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  .icon svg {
    width: 2rem;
    height: 2rem;
  }
  .title {
    margin-top: .5rem;
    color: #aad290;
  }
}
</style>
