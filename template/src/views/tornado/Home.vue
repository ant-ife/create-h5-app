<template>
  <div class="tornado-body">
    <Icon name="tornado" />
    <div class="title">
      {{ $t('Welcome') }}{{ test }}{{ msg }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { loadLanguageAsync } from 'utils/i18n'
export default {
  created () {
    setTimeout(() => {
      loadLanguageAsync('tornado', 'zh-CN')
      setTimeout(() => {
        loadLanguageAsync('tornado', 'en-US')
      }, 2000)
    }, 2000)
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
