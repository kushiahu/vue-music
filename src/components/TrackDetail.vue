<template lang="pug">
  .container
    // plt-loader(v-show="isLoading")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image(v-if="track && track.album")
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") ▶️

      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}

                nav.level
                  .level-left
                    a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
// import trackService from '@/services/track'
// import pltLoader from '@/components/shared/Loader.vue'
import trackMixin from '@/mixins/track'

export default {
  // components: { pltLoader },
  mixins: [ trackMixin ],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  // Reemplazado por el mapState de vuex
  // data: () => ({
  //   track: {},
  //   isLoading: false
  // }),
  created () {
    const id = this.$route.params.id
    // this.isLoading = true
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track loaded ...')
        })
    }
    // Cambiado por la funcion de arriba
    // trackService.getById(id)
    //   .then(res => {
    //     this.track = res
    //     this.isLoading = false
    //   })
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>
