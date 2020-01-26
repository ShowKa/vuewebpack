
<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  props: {
    // define argument of this module
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  color red
</style>
