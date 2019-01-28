<template>
  <div class="body">
    <Icon name="typhoon" />
    <div class="title">
      {{ $t('Welcome') }} {{ getMsg }} {{ msg }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: 'typhoon!',
    }
  },
  computed: {
    ...mapGetters([
      'getMsg',
    ]),
  },
  created () {
    this.getTest()
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
    color: #749cef;
  }
}
</style>
