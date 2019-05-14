<template lang="pug">
  .container
    plt-loader(v-show="isLoading")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image(v-if="track && track.album")
            img(:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large
              span.icon(@click="selectTrack")

      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
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
import trackService from '@/services/track'
import pltLoader from '@/components/shared/Loader.vue'
import trackMixin from '@/mixins/track'

export default {
  components: { pltLoader },
  mixins: [ trackMixin ],
  data: () => ({
    track: {},
    isLoading: false
  }),
  created () {
    const id = this.$route.params.id
    this.isLoading = true
    trackService.getById(id)
      .then(res => {
        this.track = res
        this.isLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
