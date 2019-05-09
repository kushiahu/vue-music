<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Ciclo de vida (Hooks)</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    person: {
      name: 'Ignacio'
    }
  }),
  created () {
    console.log('created ...')
  },
  mounted () {
    console.log('mounted ...')
  }
}
</script>
