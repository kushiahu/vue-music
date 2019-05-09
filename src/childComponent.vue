<template lang="pug">
  div
    h1 Este es un componente hijo
    slot(name="subtitle")
      h2 Subtitle
    local-component
</template>

<script>
import LocalComponent from './localComponent.vue'

export default {
  components: { LocalComponent }
}
</script>
