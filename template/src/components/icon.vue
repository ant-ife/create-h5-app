<template>
  <span
    :class="['icon', 'icon-' + name, type ? ('icon-' + type) : '', clazz]"
    v-html="html"/>
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
