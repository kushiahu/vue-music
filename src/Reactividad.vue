<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Reactividad</h1>
    <p>{{ person }}</p>
    <button type="button" name="button" @click="addProp">Add propiedad</button>
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
  methods: {
    addProp () {
      // this.person.lastName = 'Anaya' // Con esto Vue.js no se entera de los cambios
      // this.$set(this.person, 'lastName', 'Anaya') // con esta función se entera vue de los cambios
      this.person = Object.assign({}, this.person, { a: 1, b: 2 }) // su es más de una propiedad, con esta funcion
    }
  }
}
</script>
