<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong Platzi Music
          .nav-right.nav-menu

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nas
        plt-player
</template>

<script>
import pltPlayer from '@/components/Player.vue'

export default {
  components: { pltPlayer }
}
</script>
