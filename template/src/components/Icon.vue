<!-- eslint-disable vue/no-v-html -->
<template>
  <span
    :class="['icon', 'icon-' + name, type ? ('icon-' + type) : '', clazz]"
    v-html="html"
  />
</template>

<script>

export default {
  props: [
    'name',
    'type',
    'clazz',
  ],

  computed: {
    html () {
      return `
        <svg>
          <use xlink:href="#icon-${this.name}"/>
        </svg>
      `
    },
  },
}
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
  fill: currentColor;
  vertical-align: middle;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
