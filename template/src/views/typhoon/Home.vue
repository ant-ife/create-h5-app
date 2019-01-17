<template>
  <div class="typhoon-body">
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
