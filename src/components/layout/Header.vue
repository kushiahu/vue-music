<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .navbar-brand
          strong Platzi Music
        .navbar-menu
          .navbar-end
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas!
        plt-player
</template>

<script>
import pltPlayer from '@/components/Player.vue'

export default {
  components: { pltPlayer }
}
</script>
