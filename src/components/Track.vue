<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong>{{ track.name }}</strong>
          </p>
          <p class="subtitle is-6">
            <strong>{{ track.artists[0].name }}</strong>
          </p>
        </div>
      </div>
      <div class="content">
        <small>{{ track.duration_ms | ms-to-mm }}</small>
        <nav class="level">
          <div class=" level-left">
            <button type="button" name="button" class="level-item button is-primary">
              <span class="icon is-small" @click="selectTrack">▶️</span>
            </button>
            <button type="button" name="button" class="level-item button is-warning">
              <span class="icon is-small" @click="goToTrack(track.id)">🌎</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
  props: {
    track: { type: Object, required: true }
  },
  mixins: [ trackMixin ],
  methods: {
    // selectTrack () { // se llevo a un mixin
    //   if (!this.track.preview_url) { return } // cuando no tenga preview de la canción, corta la función
    //   this.$emit('evSelect', this.track.id) // funcion que emite un evento al padre para que lo escuche
    //   this.$bus.$emit('set-track', this.track) // usa el plugin $bus que se instalo en main.js y se usa en header.vue y player.vue
    // },
    goToTrack (id) {
      if (!this.track.preview_url) { return }
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
