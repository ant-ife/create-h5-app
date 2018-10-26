<template>
  <div class="typhoon-body">
    <Icon name="typhoon"></Icon>
    <div class="title">{{ $t('Welcome') }} {{ getMsg }} {{ msg }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  created () {
    this.getTest()
  },
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
  methods: {
    ...mapActions([
      'getTest',
    ]),
  },
}
</script>
