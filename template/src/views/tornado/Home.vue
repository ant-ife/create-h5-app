<template>
  <div class="body">
    <Icon name="tornado"></Icon>
    <div class="title">
      {{ $t('welcome') }}{{ space }}{{ appName }}{{ tripleBang }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { loadLanguageAsync } from 'utils/i18n'
import { sleep } from 'utils'
export default {
  data() {
    return {
      appName: this.$t('appName'),
    }
  },
  computed: {
    ...mapState(['space']),
    ...mapGetters(['tripleBang']),
  },
  async created() {
    await this.getSpace()
    await sleep(1000)
    await loadLanguageAsync('tornado', 'zh-CN')
    await sleep(1000)
    await loadLanguageAsync('tornado', 'en-US')
  },
  methods: {
    ...mapActions(['getSpace']),
  },
}
</script>

<style lang="less" scoped>
.body {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  .title {
    margin-top: 0.5rem;
    color: #aad290;
    font-size: 0.5rem;
  }
}
</style>

<style lang="less">
.icon-tornado svg {
  width: 2rem;
}
</style>
