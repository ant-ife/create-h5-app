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
  data () {
    return {
      msg: 'tornado!',
    }
  },
  computed: {
    ...mapState([
      'test',
    ]),
  },
  created () {
    setTimeout(() => {
      loadLanguageAsync('tornado', 'zh-CN')
      setTimeout(() => {
        loadLanguageAsync('tornado', 'en-US')
      }, 2000)
    }, 2000)
  },
  methods: {
    ...mapActions([
      'getTest',
    ]),
  },
}
</script>
