<template lang="pug">
  #app
    plt-header

    router-view

    plt-footer
</template>

<script>
import pltFooter from '@/components/layout/Footer.vue'
import pltHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    pltFooter,
    pltHeader
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px solid #23d160;
}
</style>
