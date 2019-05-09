<template lang="pug">
  .content
    p
      img(:src="imgTrack")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms }}]
    p
      audio(controls, autoplay, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {},
      imgTrack: ''
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
      this.imgTrack = track.album.images[0].url
    })
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
