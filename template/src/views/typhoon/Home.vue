<template>
  <div class="body">
    <Icon name="typhoon"></Icon>
    <div class="title">{{ $t('welcome') }}{{ space }}{{ appName }}{{ tripleBang }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      appName: this.$t('appName'),
    }
  },
  computed: {
    ...mapState([
      'space',
    ]),
    ...mapGetters([
      'tripleBang',
    ]),
  },
  created () {
    this.getSpace()
  },
  methods: {
    ...mapActions([
      'getSpace',
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
  .title {
    margin-top: .5rem;
    color: #749cef;
    font-size: .5rem;
  }
}
</style>

<style lang="less">
.icon-typhoon svg {
  width: 2rem;
}
</style>
