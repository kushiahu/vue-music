const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return } // cuando no tenga preview de la canción, corta la función
      this.$store.commit('setTrack', this.track)
      // remplazado por vuex
      this.$emit('evSelect', this.track.id) // funcion que emite un evento al padre para que lo escuche
      // this.$bus.$emit('set-track', this.track) // usa el plugin $bus que se instalo en main.js y se usa en header.vue y player.vue
    }
  }
}

export default trackMixin
