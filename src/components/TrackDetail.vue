<template lang="pug">
  .container
    plt-loader(v-show="isLoading")
    .columns
     .column.is-4.is-offset-4
      plt-track(v-if="track", :track="track")
</template>

<script>
import trackService from '@/services/track'

import pltLoader from '@/components/shared/Loader.vue'
import pltTrack from '@/components/Track.vue'

export default {
  components: { pltTrack, pltLoader },
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
