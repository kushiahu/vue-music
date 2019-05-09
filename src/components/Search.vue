<template lang="pug">
  main
    pltNotification(v-show="showNotification")
      p(slot="body") No se encontraron resultados!
    section.section
      nav.navbar
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(v-on:click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      plt-loader(v-show="isLoading")
      .container.results(v-show="!isLoading")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            plt-track(
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              v-on:evSelect="setSelectedTrack"
            )
</template>

<script>
import trackService from '@/services/track'

import pltLoader from '@/components/shared/Loader.vue'
import pltNotification from '@/components/shared/Notification.vue'

import pltTrack from '@/components/Track.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  components: {
    pltLoader,
    pltNotification,
    pltTrack
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss" scoped>

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px solid #23d160;
}
</style>
