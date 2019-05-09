<template lang="pug">
  .app
    .img(src="./assets/logo.png")
    h1 Slots

    child
      h1(slot="subtitle") Titulo Slot
</template>

<script>
import Child from './childComponent.vue'

export default {
  name: 'app',
  components: {
    Child
  },
  data: () => ({
  })
}
</script>
